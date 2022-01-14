import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public products: Product[];


  editProduct: Product;
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;

  constructor(private router: Router, private service: RegistrationService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void
  {
    this.service.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateProduct(product: Product): void
  {
    
    this.editProduct = product;
    console.log(this.editProduct);

    this.service.updateProduct(product).subscribe(
     (response: Product) => {
       console.log(response);
       this.getProducts();
     },
     (error: HttpErrorResponse) =>{
       alert(error.message); 
     }
   ); 
  }

  public onOpenModel(product: Product, mode: string): void
  {
    const container = document.getElementById('main-container');

    const button = document.createElement('button');
    button.type = ' button';
    button.style.display= 'none';
    container?.appendChild(button);
    button.click();
  }

}
