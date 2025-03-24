import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeDonate1Page } from './make-donate-1.page';

const routes: Routes = [
  {
    path: '',
    component: MakeDonate1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeDonate1PageRoutingModule {}
