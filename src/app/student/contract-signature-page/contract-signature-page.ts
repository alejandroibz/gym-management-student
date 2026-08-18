import {CommonModule} from '@angular/common';
import {AfterViewInit,ChangeDetectionStrategy,Component,ElementRef,ViewChild,inject,signal} from '@angular/core';
import {FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ActivatedRoute,Router,RouterLink} from '@angular/router';
import {StudentContract} from '../student.models';
import {StudentService} from '../student.service';

@Component({selector:'app-contract-signature',standalone:true,imports:[CommonModule,ReactiveFormsModule,RouterLink,MatButtonModule,MatCheckboxModule,MatFormFieldModule,MatIconModule,MatInputModule],templateUrl:'./contract-signature-page.html',styleUrl:'./contract-signature-page.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class ContractSignaturePage implements AfterViewInit{
  @ViewChild('canvas')canvas?:ElementRef<HTMLCanvasElement>;
  private readonly service=inject(StudentService);private readonly route=inject(ActivatedRoute);private readonly router=inject(Router);private readonly fb=inject(FormBuilder);private readonly openedAt=Date.now();private drawing=false;
  readonly contract=signal<StudentContract|null>(null);readonly required=signal(this.route.snapshot.queryParamMap.get('required')==='true');readonly isDark=signal(localStorage.getItem('student-theme')==='dark');readonly readComplete=signal(false);readonly signed=signal(false);readonly saving=signal(false);readonly error=signal('');readonly otpSending=signal(false);readonly otpSent=signal(false);readonly otpVerifying=signal(false);readonly otpVerified=signal(false);readonly otpDestination=signal('');readonly otpExpiresAt=signal('');readonly otpToken=signal('');
  readonly form=this.fb.nonNullable.group({signerName:['',Validators.required],signerDni:['',Validators.required],otpCode:['',[Validators.required,Validators.pattern(/^\d{6}$/)]],accepted:[false,Validators.requiredTrue]});
  constructor(){document.body.classList.toggle('student-dark',this.isDark());this.service.getContract(Number(this.route.snapshot.paramMap.get('id'))).subscribe({next:x=>{if(x.status!=='PendingSignature'){this.router.navigate(['/inicio']);return}this.contract.set(x);this.form.patchValue({signerName:x.clientName,signerDni:x.clientDni??''})},error:()=>this.error.set('No pudimos abrir el contrato.')})}
  ngAfterViewInit():void{this.prepareCanvas()}
  toggleTheme():void{this.isDark.update(value=>!value);document.body.classList.toggle('student-dark',this.isDark());localStorage.setItem('student-theme',this.isDark()?'dark':'light')}
  confirmRead():void{this.readComplete.set(true);setTimeout(()=>this.prepareCanvas(),0)}
  requestOtp():void{const c=this.contract();if(!c||this.otpSending())return;this.otpSending.set(true);this.error.set('');this.service.requestContractOtp(c.id).subscribe({next:value=>{this.otpSent.set(true);this.otpDestination.set(value.deliveryAddressMasked);this.otpExpiresAt.set(value.expiresAt);this.otpSending.set(false)},error:e=>{this.error.set(e.error?.error??'No pudimos enviar el código por correo.');this.otpSending.set(false)}})}
  verifyOtp():void{const c=this.contract(),code=this.form.controls.otpCode.value;if(!c||this.form.controls.otpCode.invalid||this.otpVerifying())return;this.otpVerifying.set(true);this.error.set('');this.service.verifyContractOtp(c.id,code).subscribe({next:value=>{this.otpToken.set(value.verificationToken);this.otpVerified.set(true);this.form.controls.otpCode.disable();this.otpVerifying.set(false)},error:e=>{this.error.set(e.error?.error??'No pudimos validar el código.');this.otpVerifying.set(false)}})}
  private prepareCanvas():void{const c=this.canvas?.nativeElement;if(!c||c.width)return;const r=devicePixelRatio||1;c.width=c.clientWidth*r;c.height=210*r;c.getContext('2d')?.scale(r,r)}
  start(e:PointerEvent):void{this.drawing=true;this.draw(e,true)}move(e:PointerEvent):void{if(this.drawing)this.draw(e,false)}stop():void{if(this.drawing)this.signed.set(true);this.drawing=false}
  clear():void{const c=this.canvas?.nativeElement;if(c)c.getContext('2d')?.clearRect(0,0,c.width,c.height);this.signed.set(false)}
  private draw(e:PointerEvent,start:boolean):void{const c=this.canvas?.nativeElement,x=c?.getContext('2d');if(!c||!x)return;const b=c.getBoundingClientRect();x.strokeStyle='#171719';x.lineWidth=2.5;x.lineCap='round';if(start){x.beginPath();x.moveTo(e.clientX-b.left,e.clientY-b.top)}else{x.lineTo(e.clientX-b.left,e.clientY-b.top);x.stroke()}}
  submit():void{const c=this.contract(),canvas=this.canvas?.nativeElement;if(!c||!canvas||!this.form.controls.signerName.valid||!this.form.controls.signerDni.valid||!this.form.controls.accepted.valid||!this.signed()||!this.readComplete()||!this.otpVerified())return;this.saving.set(true);this.error.set('');const raw=this.form.getRawValue();this.service.signContract(c.id,{signerName:raw.signerName,signerDni:raw.signerDni,accepted:raw.accepted,signatureDataUrl:canvas.toDataURL('image/png'),readConfirmed:true,readingSeconds:Math.max(3,Math.round((Date.now()-this.openedAt)/1000)),otpVerificationToken:this.otpToken(),signerCapacity:'Self'}).subscribe({next:()=>this.router.navigate(['/inicio'],{replaceUrl:true}),error:e=>{this.error.set(e.error?.error??'No pudimos guardar la firma.');this.saving.set(false)}})}
}
