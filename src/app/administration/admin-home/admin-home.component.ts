import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/buyer';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  buyerCount: any;
  sellerCount: any;
  productCount: any;
  paymentCount: any;

  constructor(private router: Router, private service: RegistrationService) {}

  ngOnInit() {
    this.getBuyerCount();
    this.getSellerCount();
    this.getProductCount();
    this.getPaymentCount();
  }

  public getBuyerCount(): any {
    this.service.countBuyers().subscribe(
      (response: any) => {
        console.log(response);
        this.buyerCount = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getSellerCount(): any {
    this.service.countSellers().subscribe(
      (response: any) => {
        console.log(response);
        this.sellerCount = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProductCount(): any {
    this.service.countProducts().subscribe(
      (response: any) => {
        console.log(response);
        this.productCount = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPaymentCount(): any {
    this.service.countPayments().subscribe(
      (response: any) => {
        console.log(response);
        this.paymentCount = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
