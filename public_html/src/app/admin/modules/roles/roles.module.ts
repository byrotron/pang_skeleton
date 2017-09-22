import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnRolesModule } from './../../../skeleton';
import { RolesComponent } from './roles.component';


@NgModule({
  imports: [
    CommonModule,
    SktnRolesModule
  ],
  declarations: [
    RolesComponent
  ]
})
export class RolesModule { }
