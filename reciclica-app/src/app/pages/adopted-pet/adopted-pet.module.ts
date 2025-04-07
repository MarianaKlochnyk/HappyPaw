import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdoptedPetPageRoutingModule } from './adopted-pet-routing.module';
import { SupabaseService } from 'src/service/supabase.service';
import { AdoptedPetPage } from './adopted-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptedPetPageRoutingModule,
    AdoptedPetPage
  ],
  declarations: []
})
export class AdoptedPetPageModule {}
