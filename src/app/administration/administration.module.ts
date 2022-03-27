import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { GetBiddersComponent } from './get-bidders/get-bidders.component';
import { GetSellersComponent } from './get-sellers/get-sellers.component';
import { ViewAuctionsComponent } from './view-auctions/view-auctions.component';
import { FormsModule } from '@angular/forms';
import { PaymentsComponent } from './payments/payments.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    GetBiddersComponent,
    GetSellersComponent,
    ViewAuctionsComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdministrationModule { }
