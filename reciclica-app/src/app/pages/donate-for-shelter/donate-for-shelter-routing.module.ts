import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonateForShelterPage } from './donate-for-shelter.page';

const routes: Routes = [
  {
    path: '',
    component: DonateForShelterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateForShelterPageRoutingModule {}
