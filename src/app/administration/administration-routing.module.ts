import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { GetBiddersComponent } from './get-bidders/get-bidders.component';
import { GetSellersComponent } from './get-sellers/get-sellers.component';
import { ViewAuctionsComponent } from './view-auctions/view-auctions.component';

const routes: Routes = [

  {path: '', component : AdminHomeComponent },
  {path:'getBidders', component:GetBiddersComponent },
  {path:'getSellers', component:GetSellersComponent } ,
  { path:'viewAuction', component:ViewAuctionsComponent }
  // { path: '', children :[
  //   { path : 'adminHome', component : AdminHomeComponent },
  //   { path : '', redirectTo : 'admin', pathMatch : 'full' }
  // ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
