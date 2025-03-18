import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeDonate1PageRoutingModule } from './make-donate-1-routing.module';

import { MakeDonate1Page } from './make-donate-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeDonate1PageRoutingModule,
    MakeDonate1Page
  ],
  declarations: []
})
export class MakeDonate1PageModule {}
