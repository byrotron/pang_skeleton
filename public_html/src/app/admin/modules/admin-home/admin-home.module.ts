import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnEditableListModule, SktnUploadModule } from './../../../skeleton';

import { AdminHomeComponent } from './admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    SktnEditableListModule,
    SktnUploadModule
  ],
  declarations: [
    AdminHomeComponent
  ]
})
export class AdminHomeModule { }
