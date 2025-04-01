import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShelterInfoLocationPage } from './shelter-info-location.page';

const routes: Routes = [
  {
    path: '',
    component: ShelterInfoLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShelterInfoLocationPageRoutingModule {}
