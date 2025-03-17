import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryOfDonationPage } from './history-of-donation.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryOfDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryOfDonationPageRoutingModule {}
