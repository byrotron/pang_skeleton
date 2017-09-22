import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SktnAdminPanelModule, SktnSidenavModule, SktnMenubarModule } from './../skeleton';
import { AdminHomeModule } from './modules/admin-home/admin-home.module';
import { AdminComponent } from './admin.component';
import { UsersModule } from './modules/users/users.module';
import { SettingsModule } from './modules/settings/settings.module';
import { PrivilegesModule } from './modules/privileges/privileges.module';
import { RolesModule } from './modules/roles/roles.module';
import { ProfileComponent } from './modules/profile/profile.component';
import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SktnAdminPanelModule,
    SktnMenubarModule,
    SktnSidenavModule,
    AdminRoutingModule,
    AdminHomeModule,
    UsersModule,
    SettingsModule,
    PrivilegesModule,
    RolesModule
  ],
  declarations: [
    AdminComponent,
    ProfileComponent
  ]
})
export class AdminModule { }
