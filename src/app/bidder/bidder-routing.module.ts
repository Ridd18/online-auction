import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from '../auction/auction.component';
import { AuthenticationGuard } from '../authentication.guard';
import { PaymentComponent } from '../payment/payment.component';
import { ViewAuctionComponent } from '../view-auction/view-auction.component';
import { AddBidComponent } from './add-bid/add-bid.component';
import { BidComponent } from './bid/bid.component';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';
import { BidderViewAuctionComponent } from './bidder-view-auction/bidder-view-auction.component';
import { BidderViewProductComponent } from './bidder-view-product/bidder-view-product.component';

const routes: Routes = [
  {
    path: '',
    component: BidderHomeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'bidderHome/:email',
    component: BidderHomeComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'viewAuction', component: BidderViewAuctionComponent },
  {
    path: 'bid/:id',
    component: BidComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'addBid/:id',
    component: AddBidComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'payment/:id', component: PaymentComponent },
  { path: 'viewProduct/:id', component: BidderViewProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidderRoutingModule {}
