import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword4Page } from './forgot-password-4.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword4PageRoutingModule {}
