import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BidderRoutingModule } from './bidder-routing.module';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';
import { SharedModule } from '../shared/shared.module';
import { BidderNavComponent } from './bidder-nav/bidder-nav.component';
import { AddBidComponent } from './add-bid/add-bid.component';
import { BidComponent } from './bid/bid.component';



@NgModule({
  declarations: [
    BidderHomeComponent,
    BidderNavComponent,
    AddBidComponent,
    BidComponent,
  ],
  imports: [
   
    CommonModule,
    BidderRoutingModule,
    SharedModule,
    FormsModule

  ],
  exports:[FormsModule]

})
export class BidderModule { }
