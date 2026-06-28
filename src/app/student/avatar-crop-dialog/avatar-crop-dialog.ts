import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, OnDestroy, ViewChild, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-avatar-crop-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './avatar-crop-dialog.html',
  styleUrl: './avatar-crop-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarCropDialog implements AfterViewInit, OnDestroy {
  @ViewChild('cropCanvas') private canvasRef?: ElementRef<HTMLCanvasElement>;
  readonly zoom = signal(1);
  readonly isPreparing = signal(true);
  private readonly image = new Image();
  private readonly pointers = new Map<number, { x: number; y: number }>();
  private readonly imageUrl: string;
  private offsetX = 0;
  private offsetY = 0;
  private lastDragPoint: { x: number; y: number } | null = null;
  private pinchDistance = 0;
  private pinchZoom = 1;
  private readonly stageSize = 320;

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: { file: File },
    private readonly dialogRef: MatDialogRef<AvatarCropDialog, File | null>
  ) {
    this.imageUrl = URL.createObjectURL(data.file);
  }

  ngAfterViewInit(): void {
    this.image.onload = () => { this.isPreparing.set(false); this.draw(); };
    this.image.src = this.imageUrl;
  }

  ngOnDestroy(): void { URL.revokeObjectURL(this.imageUrl); }

  onPointerDown(event: PointerEvent): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    canvas.setPointerCapture(event.pointerId);
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (this.pointers.size === 1) this.lastDragPoint = { x: event.clientX, y: event.clientY };
    else if (this.pointers.size === 2) {
      this.pinchDistance = this.distanceBetweenPointers();
      this.pinchZoom = this.zoom();
      this.lastDragPoint = null;
    }
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.pointers.has(event.pointerId)) return;
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (this.pointers.size === 2) {
      const distance = this.distanceBetweenPointers();
      if (this.pinchDistance > 0) this.setZoom(this.pinchZoom * distance / this.pinchDistance);
      return;
    }
    if (!this.lastDragPoint) return;
    this.offsetX += event.clientX - this.lastDragPoint.x;
    this.offsetY += event.clientY - this.lastDragPoint.y;
    this.lastDragPoint = { x: event.clientX, y: event.clientY };
    this.clampOffsets();
    this.draw();
  }

  onPointerUp(event: PointerEvent): void {
    this.pointers.delete(event.pointerId);
    this.lastDragPoint = this.pointers.size === 1 ? [...this.pointers.values()][0] : null;
    this.pinchDistance = 0;
  }

  onZoomInput(event: Event): void { this.setZoom(Number((event.target as HTMLInputElement).value)); }
  onWheel(event: WheelEvent): void { event.preventDefault(); this.setZoom(this.zoom() + (event.deltaY < 0 ? .1 : -.1)); }
  reset(): void { this.zoom.set(1); this.offsetX = 0; this.offsetY = 0; this.draw(); }

  async apply(): Promise<void> {
    const outputSize = 720;
    const output = document.createElement('canvas');
    output.width = outputSize;
    output.height = outputSize;
    const context = output.getContext('2d');
    if (!context) return;
    const multiplier = outputSize / this.stageSize;
    const placement = this.imagePlacement();
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, outputSize, outputSize);
    context.drawImage(this.image, placement.x * multiplier, placement.y * multiplier, placement.width * multiplier, placement.height * multiplier);
    const blob = await new Promise<Blob | null>(resolve => output.toBlob(resolve, 'image/jpeg', .9));
    if (!blob) return;
    const baseName = this.data.file.name.replace(/\.[^.]+$/, '') || 'perfil';
    this.dialogRef.close(new File([blob], `${baseName}-perfil.jpg`, { type: 'image/jpeg' }));
  }

  private setZoom(value: number): void { this.zoom.set(Math.min(4, Math.max(1, value))); this.clampOffsets(); this.draw(); }

  private draw(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas || !this.image.naturalWidth) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = this.stageSize * ratio;
    canvas.height = this.stageSize * ratio;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, this.stageSize, this.stageSize);
    const placement = this.imagePlacement();
    context.drawImage(this.image, placement.x, placement.y, placement.width, placement.height);
  }

  private imagePlacement(): { width: number; height: number; x: number; y: number } {
    const baseScale = Math.max(this.stageSize / this.image.naturalWidth, this.stageSize / this.image.naturalHeight);
    const scale = baseScale * this.zoom();
    const width = this.image.naturalWidth * scale;
    const height = this.image.naturalHeight * scale;
    return { width, height, x: (this.stageSize - width) / 2 + this.offsetX, y: (this.stageSize - height) / 2 + this.offsetY };
  }

  private clampOffsets(): void {
    if (!this.image.naturalWidth) return;
    const placement = this.imagePlacement();
    const maxX = Math.max(0, (placement.width - this.stageSize) / 2);
    const maxY = Math.max(0, (placement.height - this.stageSize) / 2);
    this.offsetX = Math.min(maxX, Math.max(-maxX, this.offsetX));
    this.offsetY = Math.min(maxY, Math.max(-maxY, this.offsetY));
  }

  private distanceBetweenPointers(): number {
    const [first, second] = [...this.pointers.values()];
    return first && second ? Math.hypot(second.x - first.x, second.y - first.y) : 0;
  }
}
