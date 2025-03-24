import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewcardPage } from './addnewcard.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewcardPageRoutingModule {}
