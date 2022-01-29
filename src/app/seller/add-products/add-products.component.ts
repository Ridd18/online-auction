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


  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;


  msg = '';

  
  myDate: Date;  

  public product: Product[];


  constructor(private service: RegistrationService , private router: Router
    , private datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }

  addProduct(addProductForm: NgForm)
  {
    // let formData = new FormData();
    // formData.append('imageFile', this.uploadedImage, this.uploadedImage.name);

    // formData.append('body', new Blob([JSON.stringify(addProductForm.value)], { type: 'text/plain' }));


    this.service.addProducts(addProductForm.value)
    .subscribe(
      res => {
       let recentDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
       console.log(recentDate);
        //  = (<HTMLInputElement>document.getElementById("startDate")).value;
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['/seller/addProductImage']);

      },
      err => {
        console.log(err)
        this.msg="Bad Credentials";
      } 
    )
  }

  // imageUploadAction()
  // {

  //   this.service.saveProduct(this.uploadedImage)
  //   .subscribe((response) => {
  //       console.log(response);
  //       this.router.navigate(['/seller/sellerHome']);

  //     },
  //     err => console.log(err)
  //   );
  // }
  

}
