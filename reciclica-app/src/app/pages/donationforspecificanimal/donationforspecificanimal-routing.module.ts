import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationforspecificanimalPage } from './donationforspecificanimal.page';

const routes: Routes = [
  {
    path: '',
    component: DonationforspecificanimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationforspecificanimalPageRoutingModule {}
