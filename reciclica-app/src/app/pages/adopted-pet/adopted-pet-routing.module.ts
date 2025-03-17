import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptedPetPage } from './adopted-pet.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptedPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptedPetPageRoutingModule {}
