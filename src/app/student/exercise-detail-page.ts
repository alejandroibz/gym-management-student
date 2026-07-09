import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Exercise } from './student.models';
import { StudentService } from './student.service';

@Component({
  selector: 'app-exercise-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './exercise-detail-page.html',
  styleUrl: './exercise-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(StudentService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly exercise = signal<Exercise | null>(null);
  readonly isLoading = signal(true);
  readonly feedback = signal('');
  readonly returnUrl = this.getReturnUrl();

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    const request = /^\d+$/.test(slug) ? this.service.getExerciseById(Number(slug)) : this.service.getExerciseBySlug(slug);
    request.subscribe({
      next: exercise => {
        this.exercise.set(exercise);
        this.isLoading.set(false);
      },
      error: () => {
        this.feedback.set('No se encontro el ejercicio.');
        this.isLoading.set(false);
      }
    });
  }

  getYoutubeEmbedUrl(url: string | null | undefined): SafeResourceUrl | null {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{6,})/);
    if (!match) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${match[1]}`);
  }

  private getReturnUrl(): string {
    const value = this.route.snapshot.queryParamMap.get('returnUrl');
    return value?.startsWith('/') && !value.startsWith('//') ? value : '/ejercicios';
  }
}
