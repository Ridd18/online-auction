import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public images: Image[];


  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;

  constructor(private router: Router, private service: RegistrationService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
    this.viewImage();
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
          
          this.dbImage = 
           'data:image/jpeg;base64,' + this.postResponse[0].image;
        }
      );
  }

}
