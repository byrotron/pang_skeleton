import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
    SktnAuthGuard,
    SktnUserDetailComponent
} from 'pangular';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './modules/admin-home/admin-home.component';
import { UsersComponent } from './modules/users/users.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { PrivilegesComponent } from './modules/privileges/privileges.component';
import { RolesComponent } from './modules/roles/roles.component';

const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivateChild: [
            SktnAuthGuard
        ],
        children: [
          {
            path: 'users',
            component: UsersComponent
          },
          {
            path: 'users',
            component: UsersComponent
          },
          {
            path: 'users/:id',
            component: SktnUserDetailComponent
          },
          {
            path: 'profile/:id',
            component: ProfileComponent
          },
          {
            path: 'settings',
            component: SettingsComponent
          },
          {
            path: 'settings/privileges',
            component: PrivilegesComponent
          },
          {
            path: 'settings/roles',
            component: RolesComponent
          },
          {
            path: '',
            component: AdminHomeComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(AdminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}