import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication.guard';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';

const routes: Routes = [

  { path: '', component: BidderHomeComponent,canActivate:[AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BidderRoutingModule { }
