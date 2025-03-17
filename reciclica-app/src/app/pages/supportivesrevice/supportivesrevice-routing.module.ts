import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportivesrevicePage } from './supportivesrevice.page';

const routes: Routes = [
  {
    path: '',
    component: SupportivesrevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportivesrevicePageRoutingModule {}
