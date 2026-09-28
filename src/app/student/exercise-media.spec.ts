import { TestBed } from '@angular/core/testing';
import { ExerciseMedia } from './exercise-media';

describe('Exercise media', () => {
  const exercise = (id = 1, videoUrl = 'https://youtu.be/abcdefghijk', photoUrl: string | null = null) => ({
    id, name: 'Plancha', description: 'Core', muscleGroup: 'Core', qrUrl: '', videoUrl, photoUrl
  });
  const setup = (value = exercise()) => {
    const fixture = TestBed.createComponent(ExerciseMedia);
    fixture.componentRef.setInput('exercise', value); fixture.detectChanges();
    return fixture;
  };
  beforeEach(() => TestBed.configureTestingModule({ imports: [ExerciseMedia] }));

  it('shows the YouTube thumbnail and opens and closes the inline player', () => {
    const fixture = setup(); const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('img')?.src).toContain('/vi/abcdefghijk/');
    expect(root.querySelector('iframe')).toBeNull();
    (root.querySelector('.preview') as HTMLButtonElement).click(); fixture.detectChanges();
    expect(root.querySelector('iframe')?.src).toContain('youtube-nocookie.com/embed/abcdefghijk');
    expect(root.querySelector('a')).toBeNull();
    (root.querySelector('.stop') as HTMLButtonElement).click(); fixture.detectChanges();
    expect(root.querySelector('iframe')).toBeNull();
  });

  it('does not hide unsupported links, including when there is a photo', () => {
    const fixture = setup(exercise(1, 'https://vimeo.com/123456', 'https://example.com/photo.jpg'));
    expect(fixture.nativeElement.textContent).toContain('su enlace no admite reproducción');
    expect(fixture.nativeElement.querySelector('img')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('a')).toBeNull();
  });

  it('falls back to a thumbnail after a broken photo and preserves play on thumbnail failure', () => {
    const fixture = setup(exercise(1, 'https://youtu.be/abcdefghijk', 'https://example.com/photo.jpg'));
    fixture.nativeElement.querySelector('img').dispatchEvent(new Event('error')); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').src).toContain('/vi/abcdefghijk/');
    fixture.nativeElement.querySelector('img').dispatchEvent(new Event('error')); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img')).toBeNull();
    expect(fixture.nativeElement.querySelector('.preview')).not.toBeNull();
  });

  it('stops playback when changing exercise and does not autoplay when returning', () => {
    const fixture = setup(); fixture.componentInstance.play(); fixture.detectChanges();
    fixture.componentRef.setInput('exercise', exercise(2)); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('iframe')).toBeNull();
    fixture.componentRef.setInput('exercise', exercise(1)); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('iframe')).toBeNull();
  });

  it('plays a direct video and reports decoding or network errors inline', () => {
    const fixture = setup(exercise(1, 'https://example.com/video.mp4?token=example'));
    fixture.componentInstance.play(); fixture.detectChanges();
    fixture.nativeElement.querySelector('video').dispatchEvent(new Event('error')); fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('No se pudo reproducir');
  });

  it('uses videos from the media collection when the legacy field is empty', () => {
    const fixture = setup();
    fixture.componentRef.setInput('exercise', { ...exercise(1, ''), media: [{mediaType:'Video',url:'https://youtube.com/shorts/abcdefghijk'}] });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').src).toContain('/vi/abcdefghijk/');
  });
});
