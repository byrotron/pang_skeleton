import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SktnAdminPanelService, SktnAuthService, ISktnResponse, ISktnSidenav } from 'pangular';
import { admin_sidenav } from './admin.sidenav';
import { TestComponent } from './test.component';

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

  ngAfterViewInit(){
    this.admin.action_bar.addComponent(TestComponent, {name: "Byron"})
  }

  toggleSidenav() {
    this.admin.left_nav.toggle();
  }

  toggleRightSidenav() {
    this.admin.right_nav.toggle();
  }

  toggleActionBar() {
    this.admin.action_bar.toggle();
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
