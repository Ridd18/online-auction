import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { AuctionComponent } from './auction/auction.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackHomeComponent } from './feedback-home/feedback-home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [

  {path:'', component: HomeComponent, pathMatch:'full' },
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'bidderRegistration', component: BidderRegistrationComponent},
  {path:'sellerRegistration' , component: SellerRegistrationComponent},
  {path:'bidderLogin', component: BidderLoginComponent},
  {path:'sellerLogin', component: SellerLoginComponent},
  {path:'adminLogin', component: AdminLoginComponent},
  {path:'auction', component: AuctionComponent},
  {path:'aboutUs', component: AboutUsComponent },
  {path:'feedback', component: FeedbackComponent, canActivate:[AuthenticationGuard] },
  {path:'feedbackHome', component: FeedbackHomeComponent },
  {path:'viewProduct/:id', component: ViewProductComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) 
  },

  {
    path:'bidder',
    loadChildren:() => import('./bidder/bidder.module').then(m => m.BidderModule)
  },
  
  {
    path:'seller',
    loadChildren:() => import('./seller/seller.module').then(m => m.SellerModule)
  },

  
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }