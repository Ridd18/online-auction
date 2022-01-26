import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Bid } from 'src/app/bid';
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
  
  // product: Product;


  id: number;


  bids: Bid[] = [];

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

    this.getBids();
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
      },
      error => console.log(error)
      );
    }

    

  addBid(addBidForm: NgForm)
  {
    const bid = new Bid(addBidForm.value.bidderName, addBidForm.value.bidAmount)
    this.webSocketService.sendBid(bid);
    // localStorage.setItem('recentBid', addBidForm.value.bidAmount)
    // addBidForm.form['bidAmount'].reset();
    console.log(addBidForm.value)
    this.service.addBid(addBidForm.value)
    .subscribe(
      res => {
        console.log(res);
        // localStorage.setItem('token', res.token)
        // this.router.navigate(['']);

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
    // setConnected(connected: boolean) {
    //   this.disabled = !connected;
    //   if (connected) {
    //     this.greetings = [];
    //   }
    // }
    // connect() {
    //   const socket = new SockJS('http://localhost:8090/auction/bid');
    //   this.stompClient = Stomp.over(socket);
    //   const _this = this;
    //   this.stompClient.connect({}, function (frame) {
    //     console.log('Connected: ' + frame);
    //     _this.stompClient.subscribe('/start/initial', function(hello){
    //       console.log(JSON.parse(hello.body));
    //       _this.showMessage(JSON.parse(hello.body));
    //     });
    //  });
    // }

    // sendMessage() {
    //   this.stompClient.send(
    //     '/current/resume',
    //     {},
    //     JSON.stringify(this.newmessage)
    //   );
    //   this.newmessage = "";
    // }
    // showMessage(message) {
    //   this.greetings.push(message);
    // }
    

  


}
