import { ExerciseMedia } from './exercise-media';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Exercise } from './student.models';
import { StudentService } from './student.service';
import { ExerciseBodyMap } from './exercise-body-map';

@Component({
  selector: 'app-exercise-detail-page',
  standalone: true,
  imports: [CommonModule, ExerciseMedia, RouterLink, MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule, ExerciseBodyMap],
  templateUrl: './exercise-detail-page.html',
  styleUrl: './exercise-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(StudentService);

  readonly exercise = signal<Exercise | null>(null);
  readonly isLoading = signal(true);
  readonly feedback = signal('');
  readonly showAnatomy = signal(false);
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

  private getReturnUrl(): string {
    const value = this.route.snapshot.queryParamMap.get('returnUrl');
    return value?.startsWith('/') && !value.startsWith('//') ? value : '/ejercicios';
  }
}
