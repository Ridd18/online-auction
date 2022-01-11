import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BidderRoutingModule } from './bidder-routing.module';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';
import { SharedModule } from '../shared/shared.module';
import { BidderNavComponent } from './bidder-nav/bidder-nav.component';



@NgModule({
  declarations: [
    BidderHomeComponent,
    BidderNavComponent,
  ],
  imports: [
   
    CommonModule,
    BidderRoutingModule,
    SharedModule

  ],
  exports: [
    
  ]
})
export class BidderModule { }
