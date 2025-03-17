import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkingapetPage } from './walkingapet.page';

const routes: Routes = [
  {
    path: '',
    component: WalkingapetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkingapetPageRoutingModule {}
