import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkingapetPageRoutingModule } from './walkingapet-routing.module';

import { WalkingapetPage } from './walkingapet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkingapetPageRoutingModule,
    WalkingapetPage
  ],
  declarations: []
})
export class WalkingapetPageModule {}
