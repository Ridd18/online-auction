import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductImageComponent } from './add-product-image/add-product-image.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [

  // { path: '', component: SellerHomeComponent },
  { path: 'addProducts', component: AddProductsComponent},
  { path: 'sellerHome', component: SellerHomeComponent },
  

  { path: '',   component: SellerHomeComponent,
        children :[
          { path: 'addProducts', component: AddProductsComponent},
          { path: 'sellerHome', component: SellerHomeComponent },
          { path: 'addProductImage', component: AddProductImageComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
