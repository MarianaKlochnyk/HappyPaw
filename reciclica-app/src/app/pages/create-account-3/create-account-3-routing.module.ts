import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccount3Page } from './create-account-3.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccount3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccount3PageRoutingModule {}
