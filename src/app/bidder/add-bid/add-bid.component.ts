import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  stompClient: null;
  username: null;

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

  bids: Bid[] = [];

  constructor(public webSocketService: WebSocketService,
                private router: Router, 
                private service: RegistrationService,
                private http: HttpClient,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.webSocketService.openWebSocket();

    this.route.params
    .subscribe((params: Params) =>
    {
      this.id = +params['id'];
      console.log(this.id)
      
    }
    )
    
    this.getProduct(this.id);
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
    const bid = new Bid(addBidForm.value.user, addBidForm.value.bidAmount)
    this.webSocketService.sendBid(bid);
    addBidForm.form['bidAmount'].reset();
    console.log(addBidForm.value)
  }

  


}
