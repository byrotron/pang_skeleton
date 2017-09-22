import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SktnWebsitePanelModule, SktnMenubarModule } from './../skeleton';

import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { ResetAccountModule } from './modules/reset-account/reset-account.module';
import { EmailVerificationModule } from './modules/email-verification/email-verification.module';
import { WebsiteRoutingModule } from './website.routing';
import { WebsiteComponent } from './website.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SktnWebsitePanelModule,
    SktnMenubarModule,
    WebsiteRoutingModule,
    HomeModule,
    LoginModule,
    SignUpModule,
    EmailVerificationModule,
    ResetAccountModule
  ],
  declarations: [
    WebsiteComponent
  ]
})
export class WebsiteModule { }
