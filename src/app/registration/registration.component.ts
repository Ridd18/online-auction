import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Buyer } from '../buyer';
import { RegistrationService } from '../services/registration.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  constructor(private auth: RegistrationService , private router: Router) { }

  ngOnInit() {
  }

}
