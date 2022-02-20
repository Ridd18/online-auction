import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { NgxStripeModule, StripeElementsService } from 'ngx-stripe';
import { StripeService,StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

   stripe :any;
  card: any;
  elements:any;


  constructor( private http: HttpClient,
                private router: Router) { }

  ngOnInit(): void {
  }

   chargeCreditCard() 
  {
    let form = document.getElementsByTagName("form")[0];
    
    
    // const paymentIntent = await this.stripe.paymentIntents.create({

    (<any>window).Stripe.card.createToken(
      {
      number: form['cardNumber'].value,
      exp_month: form['expMonth'].value,
      exp_year: form['expYear'].value,
      cvc: form['cvc'].value
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        console.log(token);

        this.chargeCard(token);
      } 
      else {
        console.log(response.error.message);
      }
    });
  }

  chargeCard(token: string) {
    console.log(token)
    const headers = new HttpHeaders({'token': token, amount: "100"});
    this.http.post('http://localhost:8090/auction/payments/charge', {}, {headers: headers})  
      .subscribe(resp => 
        {
        console.log(resp);
        this.router.navigate(['/bidder/home']);
      })
  }

}

