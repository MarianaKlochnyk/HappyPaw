import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationforspecificanimalPageRoutingModule } from './donationforspecificanimal-routing.module';

import { DonationforspecificanimalPage } from './donationforspecificanimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationforspecificanimalPageRoutingModule,
    DonationforspecificanimalPage
  ],
  declarations: []
})
export class DonationforspecificanimalPageModule {}
