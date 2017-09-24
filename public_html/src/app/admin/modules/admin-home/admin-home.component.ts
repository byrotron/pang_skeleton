import { Component, AfterViewInit } from '@angular/core';

import { SktnAdminPanelService } from 'pangular';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: [
    './admin-home.component.scss'
  ]
})
export class AdminHomeComponent implements AfterViewInit {

  constructor(
    protected admin: SktnAdminPanelService
  ) { }

  ngAfterViewInit() {
    this.admin.loading = 'hide';
  }
  
  uploadImage(binary: string) {
    console.log("Uploading image now");
  }
}
