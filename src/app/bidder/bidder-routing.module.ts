import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';

const routes: Routes = [

  { path: '', component: BidderHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BidderRoutingModule { }
