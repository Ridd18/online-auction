import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from '../auction/auction.component';
import { AuthenticationGuard } from '../authentication.guard';
import { AddProductImageComponent } from './add-product-image/add-product-image.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [

  // { path: '', component: SellerHomeComponent },
  { path: 'addProducts', component: AddProductsComponent,canActivate:[AuthenticationGuard]},
  { path: 'sellerHome', component: SellerHomeComponent, canActivate:[AuthenticationGuard] },
  { path: 'viewAuction' , component: AuctionComponent},
  { path: 'viewAuction/:id' , component: AuctionComponent},
 
  { path: '',   component: SellerHomeComponent,
        children :[
          { path: 'addProducts', component: AddProductsComponent, canActivate:[AuthenticationGuard]},
          { path: 'sellerHome', component: SellerHomeComponent,canActivate:[AuthenticationGuard] },
          { path: 'addProductImage', component: AddProductImageComponent, canActivate:[AuthenticationGuard]},
          { path: 'updateProducts/:id', component: UpdateProductComponent, canActivate:[AuthenticationGuard]},

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
