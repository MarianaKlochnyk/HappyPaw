import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccount2Page } from './create-account-2.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccount2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccount2PageRoutingModule {}
