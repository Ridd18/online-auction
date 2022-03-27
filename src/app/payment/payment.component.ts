import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { NgxStripeModule, StripeElementsService } from 'ngx-stripe';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Buyer } from '../buyer';
import { Product } from '../product';
import { RegistrationService } from '../services/registration.service';
import { NgForm } from '@angular/forms';
import { Payment } from '../payment';
import { Bid } from '../bid';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public payments: Payment[];

  selectedBidder: string;
  public bid: Bid;

  public maxBid: Bid;

  bidProductName: string;

  public bids: Bid[];

  editPayment: Payment;
  deletePayment: Payment;

  public payment: Payment = new Payment();

  public products: Product[];

  editProduct: Product;
  deleteProduct: Product;

  public product: Product = new Product();

  id: number;

  public buyers: Buyer[];

  public buyer: Buyer = new Buyer();

  email: string;

  selectedEmail: string;

  bidder$: any;

  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;
  hero$: any;
  product$: any;

  stripe: any;
  card: any;
  elements: any;
  msg: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: RegistrationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });

    this.getMaxBid(this.id);
  }

  public getMaxBid(productId: number): void {
    this.service.getMaxBid(this.id).subscribe(
      (data) => {
        console.log(data);
        this.bid = data;
        this.maxBid = data;
        console.log(this.maxBid.bidAmount);
        console.log(this.bid.bidAmount);
      },
      (error) => console.log(error)
    );
  }

  public getProduct(id: number) {
    this.service.getProduct(this.id).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  chargeCreditCard() {
    let form = document.getElementsByTagName('form')[0];

    (<any>window).Stripe.card.createToken(
      {
        number: form['cardNumber'].value,
        exp_month: form['expMonth'].value,
        exp_year: form['expYear'].value,
        cvc: form['cvc'].value,
      },
      (status: number, response: any) => {
        if (status === 200) {
          let token = response.id;
          console.log(token);

          this.chargeCard(token);
        } else {
          console.log(response.error.message);
        }
      }
    );
  }

  chargeCard(token: string) {
    console.log(token);
    const headers = new HttpHeaders({ token: token, amount: '100' });
    this.http
      .post(
        'http://localhost:8090/auction/payments/charge',
        {},
        { headers: headers }
      )
      .subscribe((resp) => {
        console.log(resp);
        this.router.navigate(['/bidder']);
      });
  }

  public addPayment(addForm: NgForm) {
    this.service.addPayment(addForm.value).subscribe(
      (res) => {
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['/bidder/viewAuction']);
      },
      (err) => {
        console.log(err);
        this.msg = 'Bad Credentials';
      }
    );
  }
  public onUpdatePayment(payment: Payment): void {
    this.editPayment = payment;
    console.log(this.editPayment);

    this.service.updatePayment(payment).subscribe(
      (response: Payment) => {
        console.log(response);
        //  this.router.navigate(['/seller/sellerHome']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPayments(): void {
    this.service.getPayments().subscribe(
      (response: Payment[]) => {
        this.payments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePayment(paymentId: number): void {
    this.service.deletePayment(paymentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPayments;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPayment(id: number) {
    this.service.getPayment(this.id).subscribe(
      (data) => {
        console.log(data);
        this.payment = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getBuyer(email: string): void {
    this.service.getBuyer(this.email).subscribe(
      (data) => {
        console.log(data);
        this.buyer = data;

        this.selectedBidder = this.buyer.username;

        localStorage.setItem('bidderName', this.selectedBidder);

        // sessionStorage.setItem('bidderName' , this.selectedBidder);

        console.log(this.selectedBidder);
      },
      (error) => console.log(error)
    );
  }
}
