import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword1Page } from './forgot-password-1.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword1PageRoutingModule {}
