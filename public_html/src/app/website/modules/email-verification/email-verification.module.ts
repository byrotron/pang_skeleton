import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnEmailVerificationModule } from 'pangular';
import { EmailVerificationComponent } from './email-verification.component';

@NgModule({
  imports: [
    CommonModule,
    SktnEmailVerificationModule
  ],
  declarations: [
    EmailVerificationComponent
  ]
})
export class EmailVerificationModule { }
