import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Buyer } from 'src/app/buyer';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-bidder-home',
  templateUrl: './bidder-home.component.html'
              ,
                
  styleUrls: ['./bidder-home.component.css']
})
export class BidderHomeComponent implements OnInit {

  public buyers: Buyer[];

  public buyer: Buyer = new Buyer();
  
  // product: Product;


  id: number;

  email: string;

  selectedEmail: String;



  bidder$: any;


  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;
  hero$: any;
  product$: any;

  constructor(private router: Router, 
    private service: RegistrationService,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {


    this.getBuyers();

  //   this.route.params
  //   .subscribe((params: Params) =>
  //   {
  //     this.email = params['email'];
  //     console.log(this.email)
      
  //   }
  // )

  //     this.getBuyer(this.email);
  }

  
  public getBuyers(): void
  {
    this.service.getBuyers().subscribe(
      (response: Buyer[]) => {
        this.buyers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

    public getBidder(id: number): void
    {
      this.service.getBidder(this.id)
      .subscribe(data => 
      {
      console.log(data)
      this.buyer = data;
      },
      error => console.log(error)
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

}
