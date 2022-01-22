import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminUser = 'admin';

  msg = ''; 


  public admin: Admin[];


  constructor(private router: Router, private loginService: RegistrationService) { }

  ngOnInit() {
  
  }

  loginUser(loginForm: NgForm)
  { 

    this.loginService.loginAdmin(loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('Admin',this.adminUser)
      
      this.router.navigate(['admin'])
    },

      err => {
        console.log(err) 
        this.msg="Bad Credentials";
      }
    )

  }

}
