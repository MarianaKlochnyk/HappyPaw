import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WalkingPetPageRoutingModule } from './walking-pet-routing.module';
import { SupabaseService } from 'src/service/supabase.service';
import { WalkingPetPage } from './walking-pet.page';  // Імпортуємо компонент

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkingPetPageRoutingModule,
    WalkingPetPage,  // Просто імпортуємо, без додавання в declarations
  ],
  providers: [SupabaseService]
})
export class WalkingPetPageModule {}