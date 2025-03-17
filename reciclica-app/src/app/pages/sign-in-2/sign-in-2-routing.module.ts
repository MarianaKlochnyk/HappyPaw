import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignIn2Page } from './sign-in-2.page';

const routes: Routes = [
  {
    path: '',
    component: SignIn2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignIn2PageRoutingModule {}
