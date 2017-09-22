import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { EmailVerificationComponent } from './modules/email-verification/email-verification.component';
import { ResetAccountComponent } from './modules/reset-account/reset-account.component';

const AdminRoutes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
          path: 'sign-in',
          component: LoginComponent
      },
      {
          path: 'sign-up',
          component: SignUpComponent
      },
      {
          path: 'email-verification',
          component: EmailVerificationComponent
      },
      {
          path: 'reset-account',
          component: ResetAccountComponent
      },
      {
          path: '',
          component: HomeComponent
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
export class WebsiteRoutingModule {}