import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public products: Product[];

  
  editProduct: Product;
  deleteProduct: Product;

  public product: Product = new Product();
  
  // product: Product;


  id: number;




  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;
  hero$: any;
  product$: any;

  constructor(private router: Router, 
                private service: RegistrationService,
                private http: HttpClient,
                private route: ActivatedRoute) { }


  ngOnInit() {

    this.route.params
    .subscribe((params: Params) =>
    {
      this.id = +params['id'];
      console.log(this.id)
      
    }
  )

    // this.service.getProduct(this.id)
    //   .subscribe(data => 
    //   {
    //   console.log(data)
    //   this.product = data;
    //   },
    //   error => console.log(error)
    //   );

      this.getProduct(this.id);
      // this.getProducts();
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

    public getProduct(id: number): void
    {
      this.service.getProduct(this.id)
      .subscribe(data => 
      {
      console.log(data)
      this.product = data;
      },
      error => console.log(error)
      );
    }
}
