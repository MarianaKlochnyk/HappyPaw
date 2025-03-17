import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationforshelterPage } from './donationforshelter.page';

const routes: Routes = [
  {
    path: '',
    component: DonationforshelterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationforshelterPageRoutingModule {}
