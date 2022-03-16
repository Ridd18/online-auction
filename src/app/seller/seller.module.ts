import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddProductImageComponent } from './add-product-image/add-product-image.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SellerViewProductComponent } from './seller-view-product/seller-view-product.component';
import { SellerViewAuctionComponent } from './seller-view-auction/seller-view-auction.component';

@NgModule({
  declarations: [
    SellerHomeComponent,
    AddProductsComponent,
    AddProductImageComponent,
    UpdateProductComponent,
    SellerViewProductComponent,
    SellerViewAuctionComponent,
  ],
  imports: [CommonModule, SellerRoutingModule, SharedModule, FormsModule],
})
export class SellerModule {}
