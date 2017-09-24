import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnUsersModule } from 'pangular';
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
