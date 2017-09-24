import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnLoginModule } from 'pangular';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    SktnLoginModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
