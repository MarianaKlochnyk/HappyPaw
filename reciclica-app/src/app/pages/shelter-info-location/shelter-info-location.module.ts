import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShelterInfoLocationPageRoutingModule } from './shelter-info-location-routing.module';

import { ShelterInfoLocationPage } from './shelter-info-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShelterInfoLocationPageRoutingModule,
    ShelterInfoLocationPage
  ],
  declarations: []
})
export class ShelterInfoLocationPageModule {}
