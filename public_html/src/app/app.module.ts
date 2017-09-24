import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { 
  SktnConnectionModule, 
  SktnConnectionComponent, 
  SktnAuthService,
  SktnAppService,
  SktnAuthGuard
} from 'pangular';

import { WebsiteModule } from './website/website.module';
import { AdminModule } from './admin/admin.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    WebsiteModule,
    AdminModule,
    SktnConnectionModule
  ],
  entryComponents: [
    SktnConnectionComponent
  ],
  providers: [
    SktnAuthService,
    SktnAuthGuard,
    SktnAppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
