
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ImageService } from './services/image.service';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RegistrationService } from './services/registration.service';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { DatePipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    RegistrationComponent,
    FooterComponent,
    SlideshowComponent,
    NavigationComponent,
    SellerRegistrationComponent,
    BidderLoginComponent,
    SellerLoginComponent,
    AdminLoginComponent,
    BidderRegistrationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    RouterModule,
    SharedModule
  ],

  exports: [
  FooterComponent,

],
  providers: [
    RegistrationService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
