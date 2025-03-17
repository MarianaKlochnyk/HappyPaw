import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeadonatePage } from './makeadonate.page';

const routes: Routes = [
  {
    path: '',
    component: MakeadonatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeadonatePageRoutingModule {}
