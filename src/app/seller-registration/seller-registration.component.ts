import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {


  msg = ''; 

  constructor(private auth: RegistrationService , private router: Router) { }

  ngOnInit(): void {
  }

  public registerUser(addForm: NgForm)
  {
    
    this.auth.registerSellerUser(addForm.value)
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
