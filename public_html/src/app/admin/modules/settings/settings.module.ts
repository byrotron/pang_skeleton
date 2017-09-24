import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktnSettingsModule } from 'pangular';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    SktnSettingsModule
  ],
  declarations: [ 
    SettingsComponent
  ]
})
export class SettingsModule { }
