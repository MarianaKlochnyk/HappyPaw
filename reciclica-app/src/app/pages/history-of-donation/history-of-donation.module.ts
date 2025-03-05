import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryOfDonationPageRoutingModule } from './history-of-donation-routing.module';

import { HistoryOfDonationPage } from './history-of-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryOfDonationPageRoutingModule,
    HistoryOfDonationPage
  ],
  declarations: []
})
export class HistoryOfDonationPageModule {}
