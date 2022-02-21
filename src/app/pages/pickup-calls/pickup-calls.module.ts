import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';

import { PickupCallsPage } from './pickup-calls.page';
import { PickupCallCardModule } from 'src/app/components/pickup-call-card/pick-call-card.module';

@NgModule({
  imports: [
    PickupCallsPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallCardModule
  ],
  declarations: [
    PickupCallsPage
  ]
})
export class PickupCallsPageModule {}
