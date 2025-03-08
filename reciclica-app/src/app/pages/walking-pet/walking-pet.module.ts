import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkingPetPageRoutingModule } from './walking-pet-routing.module';

import { WalkingPetPage } from './walking-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkingPetPageRoutingModule,
    WalkingPetPage
  ],
  declarations: []
})
export class WalkingPetPageModule {}
