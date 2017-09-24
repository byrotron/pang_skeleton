import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { SktnConnectionComponent, SktnAuthService, SktnAppService } from 'pangular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  connection_dialog: MdDialogRef<SktnConnectionComponent>;
  
  constructor(
    public app: SktnAppService,
    public auth: SktnAuthService,
    public dialog: MdDialog
  ) {}

  ngOnInit() {

    this.app.connection.subscribe(
      (connection: boolean) => {

        if(connection === false) {

          this.connection_dialog = this.dialog.open(SktnConnectionComponent, {
            disableClose: true
          });
          this.app.connected = false;

        } else if(connection === true && this.app.connected === false) {
          this.connection_dialog.close();
          this.app.connected = true;
        }
        
      }
    );

  }

}
