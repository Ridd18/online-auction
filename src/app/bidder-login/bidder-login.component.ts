import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Buyer } from '../buyer';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-bidder-login',
  templateUrl: './bidder-login.component.html',
  styleUrls: ['./bidder-login.component.css']
})
export class BidderLoginComponent implements OnInit {

  msg = ''; 


  public buyers: Buyer[];

  constructor(private router: Router, private loginService: RegistrationService) { }

  ngOnInit(): void {
  }

  loginUser(loginForm: NgForm)
  { 

    this.loginService.loginBuyerUser(loginForm.value)
    .subscribe(
      res => {
        console.log(res);
      
      this.router.navigate(['bidder'])
    },

      err => {
        console.log(err) 
        this.msg="Bad Credentials";
      }
    )
  }

}
