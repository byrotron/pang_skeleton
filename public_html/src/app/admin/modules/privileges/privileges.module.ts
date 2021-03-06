import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnPrivilegesModule } from 'pangular';
import { PrivilegesComponent } from './privileges.component';

@NgModule({
  imports: [
    CommonModule,
    SktnPrivilegesModule
  ],
  declarations: [
    PrivilegesComponent
  ]
})
export class PrivilegesModule { }
