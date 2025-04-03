 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryOfDonationPageRoutingModule } from './history-of-donation-routing.module';
import { SupabaseService } from 'src/service/supabase.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryOfDonationPageRoutingModule
  ],
   providers: [SupabaseService],
    declarations: []
})
export class HistoryOfDonationPageModule {}

