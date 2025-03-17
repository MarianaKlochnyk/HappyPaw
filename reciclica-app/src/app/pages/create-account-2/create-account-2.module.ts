import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccount2PageRoutingModule } from './create-account-2-routing.module';

import { CreateAccount2Page } from './create-account-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccount2PageRoutingModule,
    CreateAccount2Page
  ],
  declarations: []
})
export class CreateAccount2PageModule {}
