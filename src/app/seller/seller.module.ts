import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductsComponent } from './add-products/add-products.component';


@NgModule({
  declarations: [
    SellerHomeComponent,
    AddProductsComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    SharedModule
  ]
})
export class SellerModule { }
