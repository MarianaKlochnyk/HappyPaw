import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonateForPetPageRoutingModule } from './donate-for-pet-routing.module';

import { DonateForPetPage } from './donate-for-pet.page';
import { SupabaseService } from 'src/service/supabase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonateForPetPageRoutingModule,
    DonateForPetPage
  ],
  providers: [SupabaseService],
  declarations: []
})
export class DonateForPetPageModule {}
