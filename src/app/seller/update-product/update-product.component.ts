import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';
import { Params } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
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

  constructor(
    private router: Router,
    private service: RegistrationService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });

    this.service.getProduct(this.id).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
      },
      (error) => console.log(error)
    );
  }

  // public onUpdateProduct()
  //  {
  //   this.service.editProduct(this.id, this.product)
  //     .subscribe
  //     (data =>
  //       {
  //       console.log(data);
  //       this.product = new Product();
  //       console.log(this.product);
  // this.router.navigate(['/seller/sellerHome'])

  //     },
  //      error => console.log(error)
  //      );
  // }

  public getProducts(): void {
    this.service.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateProduct(product: Product): void {
    this.editProduct = product;
    console.log(this.editProduct);

    this.service.updateProduct(product).subscribe(
      (response: Product) => {
        console.log(response);
        this.router.navigate(['/seller/sellerHome']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
