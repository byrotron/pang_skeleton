import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  SktnAdminPanelModule, 
  SktnSidenavModule, 
  SktnMenubarModule 
} from 'pangular';
import { AdminHomeModule } from './modules/admin-home/admin-home.module';
import { AdminComponent } from './admin.component';
import { UsersModule } from './modules/users/users.module';
import { SettingsModule } from './modules/settings/settings.module';
import { PrivilegesModule } from './modules/privileges/privileges.module';
import { RolesModule } from './modules/roles/roles.module';
import { ProfileComponent } from './modules/profile/profile.component';
import { AdminRoutingModule } from './admin.routing';

import { TestComponent } from './test.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    FlexLayoutModule,
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
  entryComponents: [
    TestComponent
  ],
  declarations: [
    AdminComponent,
    ProfileComponent,
    TestComponent
  ]
})
export class AdminModule { }
