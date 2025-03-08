import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkingPetPage } from './walking-pet.page';

const routes: Routes = [
  {
    path: '',
    component: WalkingPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkingPetPageRoutingModule {}
