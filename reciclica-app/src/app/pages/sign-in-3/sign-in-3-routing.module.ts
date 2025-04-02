import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignIn3Page } from './sign-in-3.page';

const routes: Routes = [
  {
    path: '',
    component: SignIn3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignIn3PageRoutingModule {}
