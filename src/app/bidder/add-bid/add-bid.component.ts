import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Stomp } from '@stomp/stompjs';
import { data } from 'jquery';
import * as SockJS from 'sockjs-client';
import { Bid } from 'src/app/bid';
import { Buyer } from 'src/app/buyer';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.component.html',
  styleUrls: ['./add-bid.component.css'],
})
export class AddBidComponent implements OnInit , OnDestroy {

 
  // title = 'WebSocketChatRoom';
  // greetings: string[] = [];
  // disabled = true;
  // newmessage: string;
  // private stompClient: any;

  stompClient: null;
  username: null;

  recentBid = String;

  public products: Product[];

  

  public product: Product = new Product();
  
  // bidderName:string;

  public bid: Bid;

  public maxBid: Bid;

  id: number;


  bidProductName: string;
  


 public bids: Bid[];

 public productBids: Bid[];

 public buyers: Buyer[];

 public buyer: Buyer = new Buyer();
 

 email: string;
 selectedEmail: string;

  bidderName =  localStorage.getItem('bidderName');
  // bidderName = sessionStorage.getItem('bidderName');
  

 bidder$: any;

  constructor(public webSocketService: WebSocketService,
                private router: Router, 
                private service: RegistrationService,
                private http: HttpClient,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.webSocketService.openWebSocket();

    // this.connect();

    this.route.params
    .subscribe((params: Params) =>
      {
        this.id = +params['id'];
        console.log(this.id)

      }
    )
    
      this.getProduct(this.id);

      // this.getMaxBid(this.id);
      this.sellProduct(this.id);

      this.route.params
      .subscribe((params: Params) =>
      {
        this.email = params['email'];
        console.log(this.email)
        
      }
    )

    console.log(this.bidderName);

   
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  public getProduct(id: number): void
    {
      this.service.getProduct(this.id)
      .subscribe(data => 
      {
      console.log(data)
      this.product = data;


          this.bidProductName = this.product.productName;
          console.log(this.bidProductName);
          this.service.getBid(this.bidProductName)
          .subscribe(
            (response: Bid[]) => {
              this.productBids = response;
              console.log(this.productBids);
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
      
      },

      error => console.log(error)
      );
    }

    public getMaxBid(productId: number): void
    {
      this.service.getMaxBid(this.id)
      .subscribe(data => 
      {
      console.log(data)
      this.bid = data;
      this.maxBid = data ;
      console.log(this.maxBid.bidAmount)  
      console.log(this.bid.bidAmount)  

        // this.service.sellProduct(this.maxBid) 
        // .subscribe(
        //   (response: Bid) => {
        //     this.maxBid = response;
        //     console.log(this.maxBid);
        //   },
        //   (error: HttpErrorResponse) => {
        //     alert(error.message);
        //   }
        // );;


      // this.router.navigate(['bidder/payment']);
      },
      error => console.log(error)
      );
    }


  addBid(addBidForm: NgForm)
  {
    const bid = new Bid(addBidForm.value.bidderName, addBidForm.value.bidAmount)
    this.webSocketService.sendBid(bid);
    // addBidForm.form['bidAmount'].reset();
    console.log(addBidForm.value)
    this.service.addBid(addBidForm.value)
    .subscribe(
      res => {
        console.log(res);
       
      },
      err => console.log(err)
    )
  }

  public getBids(): void
  {
    this.service.getBids()
    .subscribe(
      (response: Bid[]) => {
        this.bids = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getBuyer(email: string): void
  {
    this.service.getBuyer(this.email)
    .subscribe(data => 
    {
    console.log(data)
    this.buyer = data;
    },
    error => console.log(error)
    );
  }

  public sellProduct(productIdd: number)
  {
    this.service.sellProduct(productIdd)
    .subscribe(data =>
      {
        console.log(data)
        this.maxBid = data;
      },
      error => console.log(error)
      );
  }

}
