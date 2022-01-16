import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
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

  selectedId: number;

  product$: any;

  // public product: Product = new Product();

  public images: Image[];

  editProduct: Product;
  id: number;


  deleteProduct: Product;

  private routeData;

  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;
  prod: Product;

  constructor(private router: Router, 
              private service: RegistrationService, 
              private http: HttpClient, 
              private route: ActivatedRoute) { }

               

  ngOnInit()
   {

    this.getProducts();
    
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => 
        {
          this.selectedId =Number(params.get('id'));
          console.log(this.selectedId);
          return this.service.getProducts();
        })

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




}
