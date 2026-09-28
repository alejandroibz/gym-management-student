import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { Exercise } from './student.models';

import { youtubeId } from './youtube-video';

@Component({
  selector: 'app-exercise-media', standalone: true, imports: [MatIconModule],
  template: `
    @if (playing() && embed(); as url) {
      <iframe [src]="url" [title]="'Video de ' + exercise()?.name" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <button class="stop" type="button" (click)="stop()">Cerrar video</button>
    } @else if (playing() && directVideo()) {
      <video [src]="video()" controls autoplay playsinline preload="metadata" (error)="playbackFailed.set(true)"></video>
      <button class="stop" type="button" (click)="stop()">Cerrar video</button>
    } @else if (playable()) {
      <button class="preview" type="button" (click)="play()" [attr.aria-label]="'Reproducir video de ' + exercise()?.name">
        @if (image(); as src) { <img [src]="src" [alt]="exercise()?.name || ''" loading="lazy" (error)="onImageError(src)"> }
        <span class="play"><mat-icon>play_circle</mat-icon><span>Ver video</span></span>
      </button>
    } @else if (image(); as src) {
      <img [src]="src" [alt]="exercise()?.name || ''" loading="lazy" (error)="onImageError(src)">
    } @else {
      <div class="placeholder"><mat-icon>fitness_center</mat-icon><span>{{ video() ? 'Video sin vista previa disponible' : 'Sin imagen o video disponible' }}</span></div>
    }
    @if (video() && !playable()) {
      <p class="media-notice" role="status">Este ejercicio tiene un video cargado, pero su enlace no admite reproducción dentro de la plataforma. Pedile a tu profesor un enlace de YouTube o un archivo MP4, WebM u OGG.</p>
    }
    @if (playbackFailed()) {
      <p class="media-notice" role="alert">No se pudo reproducir este archivo de video. Pedile a tu profesor que revise el enlace.</p>
    }
  `,
  styles: [`
    :host { display: block; min-width: 0; position: relative; background: #171719; color: white; }
    iframe, video, img, .preview, .placeholder { display: block; width: 100%; aspect-ratio: 16 / 9; border: 0; box-sizing: border-box; }
    img { object-fit: cover; } iframe, video { background: #000; }
    .preview { position: relative; padding: 0; background: #252528; color: white; cursor: pointer; font: inherit; overflow: hidden; }
    .preview img { position: absolute; inset: 0; height: 100%; }
    .play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: .25rem; background: linear-gradient(transparent, #0008); text-shadow: 0 1px 4px #000; }
    .play mat-icon { width: 52px; height: 52px; font-size: 52px; }
    .placeholder { display: flex; align-items: center; justify-content: center; flex-direction: column; gap: .5rem; color: #ccc; font-size: .8rem; }
    .stop { display: block; border: 0; padding: .65rem 1rem; background: #252528; color: white; cursor: pointer; width: 100%; font: inherit; }
    .media-notice { margin: 0; padding: .8rem; font-size: .85rem; line-height: 1.5; color: #fff; background: #252528; }
    button:focus-visible { outline: 3px solid #ef4d57; outline-offset: -3px; }
  `], changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseMedia {
  readonly exercise = input<Exercise | null | undefined>(null);
  private readonly sanitizer = inject(DomSanitizer);
  readonly video = computed(() => this.exercise()?.videoUrl || this.exercise()?.media?.find(item => item.mediaType === 'Video')?.url || '');
  readonly videoId = computed(() => youtubeId(this.video()));
  readonly directVideo = computed(() => /^https?:\/\/[^\s]+\.(mp4|webm|ogg)([?#].*)?$/i.test(this.video()));
  readonly playable = computed(() => !!this.videoId() || this.directVideo());
  readonly failedImages = signal<string[]>([]);
  onImageError(src: string): void { this.failedImages.update(values => [...values, src]); }
  readonly image = computed(() => {
    const photo = this.exercise()?.photoUrl || this.exercise()?.media?.find(item => item.mediaType === 'Image')?.url;
    if (photo && !this.failedImages().includes(photo)) return photo;
    const thumbnail = this.videoId() ? `https://i.ytimg.com/vi/${this.videoId()}/hqdefault.jpg` : null;
    return thumbnail && !this.failedImages().includes(thumbnail) ? thumbnail : null;
  });
  private readonly key = computed(() => JSON.stringify([this.exercise()?.id, this.video()]));
  private readonly activeKey = linkedSignal({ source: this.key, computation: () => '' });
  readonly playbackFailed = linkedSignal({ source: this.key, computation: () => false });
  readonly playing = computed(() => this.activeKey() === this.key());
  readonly embed = computed(() => this.videoId() ? this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube-nocookie.com/embed/${this.videoId()}?autoplay=1&playsinline=1&rel=0`) : null);
  play(): void { this.playbackFailed.set(false); this.activeKey.set(this.key()); }
  stop(): void { this.activeKey.set(''); }
}
