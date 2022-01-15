import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  deleteProduct: Product;


  
  public product: Product = new Product();


  id: number;




  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;
  

  constructor(private router: Router, private service: RegistrationService
                  ,private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    
    // this.getProducts();
    this.product = new Product();
    console.log(this.product);


    this.id = parseInt(this.route.snapshot.params['id']);
    
    console.log(this.id);

    this.service.getProduct(this.id)
    .subscribe(data => 
      {
      console.log(data)
      this.product = data;
    },
     error => console.log(error)
     );
    
    

  }


  
  public onUpdateProduct()
   {
    this.service.editProduct(this.id, this.product)
      .subscribe
      (data => 
        {
        console.log(data);
        this.product = new Product();
        console.log(this.product);
      },
       error => console.log(error)
       );
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

  // public onUpdateProduct(product: Product): void
  // {
    
  //   this.editProduct = product;
  //   console.log(this.editProduct);

  //   this.service.updateProduct(product).subscribe(
  //    (response: Product) => {
  //      console.log(response);
  //      this.getProducts();
  //    },
  //    (error: HttpErrorResponse) =>{
  //      alert(error.message); 
  //    }
  //  ); 
  // }

  // public onOpenModel(product: Product, mode: string): void
  // {
  //   const container = document.getElementById('UpdateProducts');

  //   const button = document.createElement('button');
  //   button.type = ' button';
  //   button.style.display= 'none';
  //   button.setAttribute('data-toggle','model');

    
  //   if (mode === 'edit')
  //   {
  //     this.editProduct = product;
  //     button.setAttribute('data-target','#editProductModel');
  //   }
  //   if (mode === 'delete')
  //   {
  //     this.deleteProduct = product;
  //     button.setAttribute('data-target','#deleteEmployeeModel');
  //   }

  //   container?.appendChild(button);
  //   button.click();
  // }

}
