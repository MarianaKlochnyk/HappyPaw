import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuportiveServicePage } from './suportive-service.page';

const routes: Routes = [
  {
    path: '',
    component: SuportiveServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuportiveServicePageRoutingModule {}
