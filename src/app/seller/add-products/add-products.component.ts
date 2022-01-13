import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {


  myDate: Date;  

  public product: Product[];


  constructor(private service: RegistrationService , private router: Router
    , private datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  addProduct(addProductForm: NgForm)
  {
    
    this.service.addProducts(addProductForm.value)
    .subscribe(
      res => {
       let recentDate = this.datepipe.transform(this.myDate, 'mm/dd/yyyy');
       console.log(recentDate);
        //  = (<HTMLInputElement>document.getElementById("startDate")).value;
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['/seller/addProductImage']);

      },
      err => console.log(err)
    )
  }
  // addProduct(addProductForm: NgForm)
  // {
    
  //   this.service.saveProduct(addProductForm.value)
  //   .subscribe(
  //     res => {
  //      let recentDate = this.datepipe.transform(this.myDate, 'mm/dd/yyyy');
  //      console.log(recentDate);
  //       //  = (<HTMLInputElement>document.getElementById("startDate")).value;
  //       console.log(res);
  //       // localStorage.setItem('token', res.token)
  //       this.router.navigate(['/seller/addProductImage']);

  //     },
  //     err => console.log(err)
  //   )
  // }

}
