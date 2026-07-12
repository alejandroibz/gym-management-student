import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BODY_ZONE_PATHS, BodyZoneKey } from './body-zone-paths';

interface ExerciseBodyMapMuscle {
  name: string;
  muscleGroupName?: string | null;
}

export interface BodyZone {
  key: BodyZoneKey;
  label: string;
  synonyms: string[];
}

export const BODY_ZONES: BodyZone[] = [
  { key: 'pectorals', label: 'Pectorales', synonyms: ['pectorales', 'pectoral', 'pecho'] },
  { key: 'obliques', label: 'Oblicuos', synonyms: ['oblicuo', 'oblicuos'] },
  { key: 'posterior_tibialis', label: 'Tibiales posteriores', synonyms: ['tibial posterior', 'tibiales posteriores'] },
  { key: 'extensors', label: 'Extensores', synonyms: ['extensor', 'extensores'] },
  { key: 'triceps', label: 'Triceps', synonyms: ['tricep', 'triceps'] },
  { key: 'rotators', label: 'Rotadores', synonyms: ['rotador', 'rotadores', 'manguito rotador'] },
  { key: 'traps', label: 'Trapecios', synonyms: ['trapecio', 'trapecios'] },
  { key: 'lats', label: 'Laterales', synonyms: ['laterales', 'dorsal', 'dorsales', 'dorsal ancho'] },
  { key: 'hamstrings', label: 'Isquiotibiales', synonyms: ['isquio', 'isquios', 'femoral', 'isquiotibial', 'isquiotibiales'] },
  { key: 'iliotibial_bands', label: 'Cintillas iliotibiales', synonyms: ['cintilla iliotibial', 'cintillas iliotibiales', 'tracto iliotibial'] },
  { key: 'glutes', label: 'Gluteos', synonyms: ['gluteo', 'gluteos'] },
  { key: 'lower_back', label: 'Musculos lumbares', synonyms: ['musculo lumbar', 'musculos lumbares', 'lumbar', 'lumbares', 'erector', 'erectores'] },
  { key: 'shoulders', label: 'Hombros', synonyms: ['hombro', 'hombros', 'delto', 'deltoides'] },
  { key: 'flexors', label: 'Flexores', synonyms: ['flexor', 'flexores'] },
  { key: 'biceps', label: 'Biceps', synonyms: ['bicep', 'biceps', 'braquial'] },
  { key: 'abs', label: 'Abdominales', synonyms: ['abdomen', 'abdominal', 'abdominales', 'recto abdominal', 'core'] },
  { key: 'adductors', label: 'Aductores', synonyms: ['aductor', 'aductores'] },
  { key: 'quads', label: 'Cuadriceps', synonyms: ['cuadricep', 'cuadriceps'] },
  { key: 'shins', label: 'Espinillas', synonyms: ['espinilla', 'espinillas', 'tibial anterior'] },
  { key: 'feet', label: 'Pies', synonyms: ['pies'] },
  { key: 'calves', label: 'Pantorrillas', synonyms: ['pantorrilla', 'pantorrillas', 'gemelo', 'gemelos', 'soleo'] }
];

@Component({
  selector: 'app-exercise-body-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="exercise-body-map">
      <header><span>Anatomia</span><strong>Musculos trabajados</strong></header>
      <div class="map-canvas">
        <img src="/body-muscle-map.png" alt="Mapa corporal muscular">
        <svg viewBox="0 0 1664 1248" aria-hidden="true">
          <g stroke-linejoin="round" stroke-width="3" transform="translate(0 155)">
            @for (zone of zones; track zone.key) {
              @for (path of paths[zone.key]; track path) {
                <path
                  [attr.d]="path"
                  [class.clickable]="interactive"
                  [attr.fill]="hasActiveZone(zone) ? 'rgba(93,143,240,.58)' : 'transparent'"
                  [attr.stroke]="hasActiveZone(zone) ? '#4478de' : 'transparent'"
                  (click)="toggleZone(zone)">
                </path>
              }
            }
          </g>
        </svg>
      </div>
      <div class="active-zone-list">
        @for (zone of activeZones(); track zone.key) {
          <span>{{ zone.label }}</span>
        } @empty {
          <small>Sin musculos asociados al mapa.</small>
        }
      </div>
    </section>
  `,
  styles: [`
    .exercise-body-map{background:#111827;border:1px solid rgba(148,163,184,.22);border-radius:12px;color:#f8fafc;display:grid;gap:.8rem;overflow:hidden;padding:.85rem}header{display:grid;gap:.15rem}header span{color:#ff8d91;font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}header strong{font-size:1rem}.map-canvas{aspect-ratio:1664/1248;background:#f8fafc;border-radius:10px;overflow:hidden;position:relative}.map-canvas img,.map-canvas svg{display:block;inset:0;position:absolute;transform-origin:center;width:100%}.map-canvas img{height:auto;position:static}.map-canvas svg{height:100%}.map-canvas path.clickable{cursor:pointer;pointer-events:all;transition:fill .16s ease,stroke .16s ease}.map-canvas path.clickable:hover{fill:rgba(255,141,145,.42)}.active-zone-list{display:flex;flex-wrap:wrap;gap:.35rem;min-height:27px}.active-zone-list span{background:#eef4ff;border:1px solid #bfd2ff;border-radius:999px;color:#1d4ed8;font-size:.74rem;font-weight:850;padding:.25rem .55rem}.active-zone-list small{color:#c9c9cd;font-size:.8rem}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseBodyMap {
  @Input() muscleGroup: string | null | undefined;
  @Input() musclesInvolved: string | null | undefined;
  @Input() muscles: ExerciseBodyMapMuscle[] | null | undefined;
  @Input() interactive = false;
  @Input() selectedLabels: string[] | null | undefined;
  @Output() zoneToggle = new EventEmitter<BodyZone>();

  readonly zones = BODY_ZONES;
  readonly paths = BODY_ZONE_PATHS;

  activeZones(): BodyZone[] {
    const text = this.searchText();
    if (!text) return [];
    return BODY_ZONES.filter(zone => zone.synonyms.some(synonym => text.includes(this.normalize(synonym))));
  }

  hasActiveZone(zone: BodyZone): boolean {
    return this.activeZones().some(activeZone => activeZone.key === zone.key);
  }

  toggleZone(zone: BodyZone): void {
    if (!this.interactive) return;
    this.zoneToggle.emit(zone);
  }

  private searchText(): string {
    if (this.interactive && this.selectedLabels?.length) {
      return this.normalize(this.selectedLabels.join(' '));
    }
    const structuredMuscles = (this.muscles ?? []).map(muscle => `${muscle.name} ${muscle.muscleGroupName ?? ''}`).join(' ');
    return this.normalize(`${this.muscleGroup ?? ''} ${this.musclesInvolved ?? ''} ${structuredMuscles}`);
  }

  private normalize(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
  }
}
