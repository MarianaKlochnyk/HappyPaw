import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateForShelterPageRoutingModule } from './donate-for-shelter-routing.module';

import { DonateForShelterPage } from './donate-for-shelter.page';
import { SupabaseService } from 'src/service/supabase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonateForShelterPageRoutingModule,
    DonateForShelterPage
  ],
  providers: [SupabaseService],
  declarations: []
})
export class DonateForShelterPageModule {}
