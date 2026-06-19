import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentAttendance } from './student.models';
import { StudentService } from './student.service';

@Component({ selector:'app-attendance-checkin-page', standalone:true, imports:[CommonModule,RouterLink,MatButtonModule,MatIconModule,MatProgressSpinnerModule], templateUrl:'./attendance-checkin-page.html', styleUrl:'./attendance-checkin-page.scss', changeDetection:ChangeDetectionStrategy.OnPush })
export class AttendanceCheckinPage {
  private readonly service=inject(StudentService); private readonly token=inject(ActivatedRoute).snapshot.paramMap.get('token')??'';
  readonly state=signal<'ready'|'locating'|'success'|'error'>('ready'); readonly message=signal('Necesitamos tu ubicación para validar que estás en la sede.'); readonly attendance=signal<StudentAttendance|null>(null);
  verify():void{ if(!navigator.geolocation){this.fail('Este dispositivo no permite obtener ubicación.');return;} this.state.set('locating'); this.message.set('Validando tu ubicación...'); navigator.geolocation.getCurrentPosition(position=>{this.service.checkIn({mode:'Qr',qrToken:this.token,latitude:position.coords.latitude,longitude:position.coords.longitude,accuracyMeters:position.coords.accuracy}).subscribe({next:item=>{this.attendance.set(item);this.state.set('success');this.message.set('Asistencia verificada correctamente.');},error:error=>this.fail(error?.error?.errors?.[0]??'No pudimos validar tu ubicación.')});},()=>this.fail('No recibimos permiso de ubicación. Podés registrarla manualmente.'),{enableHighAccuracy:true,timeout:15000,maximumAge:0}); }
  manual():void{this.state.set('locating');this.service.checkIn({mode:'Manual'}).subscribe({next:item=>{this.attendance.set(item);this.state.set('success');this.message.set('Asistencia manual registrada sin puntos verificados.');},error:()=>this.fail('No pudimos registrar tu asistencia.')});}
  private fail(message:string):void{this.state.set('error');this.message.set(message);}
}
