import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnSignUpModule } from './../../../skeleton';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    SktnSignUpModule
  ],
  declarations: [
    SignUpComponent
  ]
})
export class SignUpModule { }
