import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword2Page } from './forgot-password-2.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword2PageRoutingModule {}
