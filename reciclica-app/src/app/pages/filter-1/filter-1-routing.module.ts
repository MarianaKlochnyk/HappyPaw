import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filter1Page } from './filter-1.page';

const routes: Routes = [
  {
    path: '',
    component: Filter1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filter1PageRoutingModule {}
