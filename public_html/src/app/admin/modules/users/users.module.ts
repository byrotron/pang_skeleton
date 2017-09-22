import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnUsersModule } from './../../../skeleton';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    SktnUsersModule
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
