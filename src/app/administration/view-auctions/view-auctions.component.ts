import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-view-auctions',
  templateUrl: './view-auctions.component.html',
  styleUrls: ['./view-auctions.component.css']
})
export class ViewAuctionsComponent implements OnInit {

  public products: Product[];



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

  public onDeleteProduct(Productid: number): void
  {
   
   this.service.deleteProduct(Productid).subscribe(
     (response: void) => {
       console.log(response);
       this.getProducts;
     },
     (error: HttpErrorResponse) =>{
       alert(error.message); 
     }
   ); 
  }
}
