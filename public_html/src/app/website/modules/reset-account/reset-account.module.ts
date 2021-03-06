import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetAccountComponent } from './reset-account.component';
import { SktnResetAccountModule } from 'pangular';

@NgModule({
  imports: [
    CommonModule,
    SktnResetAccountModule
  ],
  declarations: [
    ResetAccountComponent
  ]
})
export class ResetAccountModule { }
