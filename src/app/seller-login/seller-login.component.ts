import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Seller } from '../seller';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  msg = ''; 

  public sellers: Seller[];

  constructor(private router: Router, private loginService: RegistrationService) { }

  ngOnInit(): void {
  }

    loginUser(loginForm: NgForm)
  {
    this.loginService.loginSellerUser(loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        
      this.router.navigate(['seller'])
    },

      err => {
        console.log(err) 
        this.msg="Bad Credentials";
      }
    )

  }

}
