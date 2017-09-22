import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SktnAdminPanelService, SktnAuthService, ISktnResponse, ISktnSidenav } from './../skeleton';
import { admin_sidenav } from './admin.sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    './admin.component.scss'
  ]
})
export class AdminComponent {

  sidenav: ISktnSidenav;
  
  constructor(
    protected router: Router,
    public admin: SktnAdminPanelService,
    protected auth: SktnAuthService
  ){}

  ngOnInit() {
    this.sidenav = admin_sidenav;
  }

  toggleSidenav() {
    this.admin.toggleSidenav();
  }

  
  logout() {

    this.auth.logout().subscribe(
      (response: ISktnResponse) => {

        if(response.status === true) {
          this.router.navigate(['/']);
          this.auth.current_user = undefined;
        }

      }
    );

  }
}
