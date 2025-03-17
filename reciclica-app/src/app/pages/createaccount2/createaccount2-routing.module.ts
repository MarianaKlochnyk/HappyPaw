import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Createaccount2Page } from './createaccount2.page';

const routes: Routes = [
  {
    path: '',
    component: Createaccount2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Createaccount2PageRoutingModule {}
