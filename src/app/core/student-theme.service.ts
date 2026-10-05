import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentThemeService {
  readonly isDark = signal(localStorage.getItem('student-theme') === 'dark');

  constructor() {
    this.applyTheme();
  }

  toggle(): void {
    this.isDark.update(value => !value);
    localStorage.setItem('student-theme', this.isDark() ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('student-dark', this.isDark());
  }
}
