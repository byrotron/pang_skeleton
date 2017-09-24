import { Component, OnInit } from '@angular/core';
import { SktnWebsitePanelService } from 'pangular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent {

  constructor(
    protected web: SktnWebsitePanelService
  ) { }
  
  ngAfterViewInit() {
    this.web.loading = 'hide';
  }
}
