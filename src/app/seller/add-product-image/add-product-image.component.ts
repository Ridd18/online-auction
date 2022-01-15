import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {

  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  status:any;
  

  constructor(private service: ImageService , private router: Router, private httpClient: HttpClient
                            , private Service: RegistrationService) { }

  ngOnInit(): void {
  }

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }


  imageUploadAction()
  {
    const imageFormData = new FormData();
    imageFormData.append('imageFile', this.uploadedImage, this.uploadedImage.name);
    console.log(this.uploadedImage)
    this.httpClient.post('http://localhost:8090/auction/image/save', imageFormData , { observe: 'response' })
    .subscribe(
    response =>
     {
          if (response.status === 200) {
            this.postResponse = response;
            // this.successResponse = this.postResponse.body.message;
            this.router.navigate(['/seller/sellerHome']);
    
          }
           else {
            this.successResponse = 'Image not uploaded due to some error!';
          }
    }
    );
  }
    
}
  // imageUploadAction() 
  // {
  //   const imageFormData = new FormData();
  //   imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
  //   // this.service.saveImage(imageFormData)
  //   this.httpClient.post('http://localhost:8090/auction/image/upload', imageFormData , { observe: 'response' })

  //   .subscribe((response) => {
  //     if (response.status === 200) {
  //       this.postResponse = response;
  //       this.successResponse = this.postResponse.body.message;
  //       this.router.navigate(['/seller/sellerHome']);

  //     }
  //      else {
  //       this.successResponse = 'Image not uploaded due to some error!';
  //     }
  //   }
  //   );
  // }


