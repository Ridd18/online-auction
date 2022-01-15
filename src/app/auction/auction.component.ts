import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../image';
import { Product } from '../product';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  public products: Product[];


  public product: Product = new Product();

  public images: Image[];

  editProduct: Product;
  id: number;


  deleteProduct: Product;


  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;

  constructor(private router: Router, private service: RegistrationService
                 , private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void
   {
    this.getProducts();
    // this.product = new Product();
    // console.log(this.product);


    // this.id = parseInt(this.route.snapshot.params['id']);
    
    // console.log(this.id);

    // this.service.getProduct(this.id)
    // .subscribe(data => 
    //   {
    //   console.log(data)
    //   this.product = data;
    // },
    //  error => console.log(error)
    //  );
    
    
  }


   public onUpdateProduct() {
    this.service.editProduct(this.id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        console.log(this.product);
      }, error => console.log(error));
  }


  isShowDivIf = true;  
    
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
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

  
  viewImage() {
    this.http.get('http://localhost:8090/auction/image/all') 
      .subscribe(
        res => {
          this.postResponse = res;
          console.log(this.postResponse);
          // var bas64String = btoa(String.fromCharCode.apply(null, new Uint8Array(this.postResponse[0].image)));
          // console.log(bas64String);
          
          this.img = this.postResponse.image;
          this.dbImage = 'data:image/jpeg;base64,' + this.img;
          console.log(this.dbImage);

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



}
