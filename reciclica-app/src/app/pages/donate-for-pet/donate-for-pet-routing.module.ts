import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonateForPetPage } from './donate-for-pet.page';

const routes: Routes = [
  {
    path: '',
    component: DonateForPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateForPetPageRoutingModule {}
