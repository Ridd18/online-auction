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

 

  constructor( private router: Router, private loginService: RegistrationService ) { }

  ngOnInit() {
  
  }


}
