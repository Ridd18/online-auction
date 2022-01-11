import { Component, OnInit } from '@angular/core';   
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

import { RegistrationService } from '../services/registration.service';
import { Buyer } from '../buyer';

import { Seller } from '../seller';
import { of } from 'rxjs';
import { Admin } from '../admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  email: String;
  pass: String;

  msg = ''; 

  public sellers: Seller[];

  public buyers: Buyer[];

  public admin: Admin[];
  
  

  constructor( private router: Router, private loginService: RegistrationService ) { }

  ngOnInit() {
  
  }

  
  
  // loginUser(loginForm: NgForm)
  // { 

  //   this.loginService.loginAdmin(loginForm.value)
  //   .subscribe(
  //     res => {
  //       console.log(res);
      
  //     this.router.navigate(['admin'])
  //   },

  //     err => {
  //       console.log(err) 
  //       this.msg="Bad Credentials";
  //     }
  //   )



    // for(const buyer of this.buyers)
    // {
    //   if ((buyer.email !== null)) {
    //     console.log(this.email);
    //   }
    
    // }
    
    
    // this.email = (<HTMLInputElement>document.getElementById("email")).value;

    // this.pass = (<HTMLInputElement>document.getElementById("pass")).value;
 
    // // if(this.email === this.buyers.email && this.pass === this.buyers.password)

    // console.log(this.email);
    // console.log(this.pass);



    // this.loginService.loginBuyerUser(loginForm.value)
    // .subscribe(
    //   res => {
    //     console.log(res);
      
    //   this.router.navigate(['bidder'])
    // },

    //   err => {
    //     console.log(err) 
    //     this.msg="Bad Credentials";
    //   }
    // )
    
  
  // }


  

  // loginBidderUser(loginForm: NgForm)
  // {
  //   this.loginService.loginSellerUser(loginForm.value)
  //   .subscribe(
  //     res => {
  //       console.log(res);
        
  //     this.router.navigate(['seller'])
  //   },

  //     err => {
  //       console.log(err) 
  //       this.msg="Bad Credentials";
  //     }
  //   )

  // }

 
}
