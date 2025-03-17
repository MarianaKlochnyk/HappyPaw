import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignIn1Page } from './sign-in-1.page';

const routes: Routes = [
  {
    path: '',
    component: SignIn1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignIn1PageRoutingModule {}
