import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkingPetAnimalPageRoutingModule } from './walking-pet-animal-routing.module';

import { WalkingPetAnimalPage } from './walking-pet-animal.page';
import { SupabaseService } from 'src/service/supabase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkingPetAnimalPageRoutingModule,
    WalkingPetAnimalPage
  ],
  providers: [SupabaseService],
  declarations: []
})
export class WalkingPetAnimalPageModule {}
