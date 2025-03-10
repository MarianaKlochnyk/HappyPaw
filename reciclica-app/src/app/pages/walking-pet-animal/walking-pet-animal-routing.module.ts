import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkingPetAnimalPage } from './walking-pet-animal.page';

const routes: Routes = [
  {
    path: '',
    component: WalkingPetAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkingPetAnimalPageRoutingModule {}
