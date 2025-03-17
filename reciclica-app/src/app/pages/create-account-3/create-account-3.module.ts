import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccount3PageRoutingModule } from './create-account-3-routing.module';

import { CreateAccount3Page } from './create-account-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccount3PageRoutingModule,
    CreateAccount3Page
  ],
  declarations: []
})
export class CreateAccount3PageModule {}
