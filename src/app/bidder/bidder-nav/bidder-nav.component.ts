import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Buyer } from 'src/app/buyer';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-bidder-nav',
  templateUrl: './bidder-nav.component.html',
  styleUrls: ['./bidder-nav.component.css'],
})
export class BidderNavComponent implements OnInit {
  public buyers: Buyer[];

  public buyer: Buyer = new Buyer();

  id: number;

  email: string;

  selectedBidder: string;

  bidder$: any;

  constructor(
    private router: Router,
    private service: RegistrationService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getBuyers();

    this.route.params.subscribe((params: Params) => {
      this.email = params['email'];
      console.log(this.email);
    });

    this.getBuyer(this.email);
  }

  public getBuyers(): void {
    this.service.getBuyers().subscribe(
      (response: Buyer[]) => {
        this.buyers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getBidder(id: number): void {
    this.service.getBidder(this.id).subscribe(
      (data) => {
        console.log(data);
        this.buyer = data;
      },
      (error) => console.log(error)
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

  logout() {
    localStorage.removeItem('bidderName');
    localStorage.removeItem('Bidder');
  }
}
