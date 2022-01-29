import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Buyer } from '../buyer';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {

  public buyer: Buyer[]; 

  msg = '';

  constructor(private auth: RegistrationService , private router: Router) { }

  ngOnInit(): void {
  }

  
  public registerUser(addForm: NgForm)
  {
    
    this.auth.registerBuyerUser(addForm.value)
    .subscribe(
      res => {
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['']);

      },
      err => {
        console.log(err)
        this.msg="Bad Credentials";
      }
    )
  }

}
