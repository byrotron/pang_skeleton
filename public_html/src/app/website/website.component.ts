import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SktnWebsitePanelService, SktnAuthService, ISktnResponse, FadeToggle } from 'pangular';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: [
    './website.component.scss'
  ]
})
export class WebsiteComponent {
  
  constructor(
    public router: Router,
    protected auth: SktnAuthService,
    protected web: SktnWebsitePanelService
  ){}

  ngOnInit() {

    this.auth.isAuthenticated().subscribe(
      (response: ISktnResponse) => {
        if(response.status === true) {
          this.auth.current_user = response.result.user;
        }
      }
    );

    this.router.events.subscribe(
      (event: any) => {
        if(event instanceof NavigationStart) {
          console.log("Started");
          this.web.loading = 'show';
        }
      }
    );

  }

  logout() {

    this.auth.logout().subscribe(
      (response: ISktnResponse) => {

        if(response.status === true) {
          this.auth.current_user = undefined;
        }

      }
    );

  }

}
