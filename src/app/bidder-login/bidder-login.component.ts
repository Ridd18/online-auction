import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { Buyer } from '../buyer';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-bidder-login',
  templateUrl: './bidder-login.component.html',
  styleUrls: ['./bidder-login.component.css']
})
export class BidderLoginComponent implements OnInit {

  bidderUser= 'Bidder';


  public buyer: Buyer = new Buyer();
  
  selectedEmail: String;

  id: number;

  bidder$: any;

  msg = ''; 


  public buyers: Buyer[];

  constructor(private router: Router, 
              private loginService: RegistrationService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    
    this.getBuyers();
    



    // this.bidder$ = this.route.paramMap.pipe(
    //   switchMap(params => 
    //     {
    //       console.log(params);
    //       this.selectedEmail = JSON.parse(this.route.snapshot.paramMap.get['email']);
    //       // this.selectedEmail = params.get('email');
    //       console.log(this.selectedEmail);
    //       return this.loginService.getBuyers();
    //     })

    // );
    
    
    // this.getBidder(this.buyer.id);
  }

  loginUser(loginForm: NgForm)
  { 

    this.loginService.loginBuyerUser(loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('Bidder',this.bidderUser)
    
      this.router.navigate(['bidder'])

      this.selectedEmail = loginForm.value.email;
      console.log(this.selectedEmail);
    },

      err => {
        console.log(err) 
        this.msg="Bad Credentials";
      }
    )
  }

  public getBuyers(): void
  {
    this.loginService.getBuyers().subscribe(
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
    this.loginService.getBidder(this.id)
    .subscribe(data => 
    {
    console.log(data)
    this.buyer = data;
    },
    error => console.log(error)
    );
  }

}
