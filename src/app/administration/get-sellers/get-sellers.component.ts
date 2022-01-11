import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/seller';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-get-sellers',
  templateUrl: './get-sellers.component.html',
  styleUrls: ['./get-sellers.component.css']
})
export class GetSellersComponent implements OnInit {


  public sellers: Seller[];

  constructor(private router: Router, private loginService: RegistrationService) { }

  ngOnInit(): void {

    this.getSellers();
  }

  public getSellers(): void
  {
    this.loginService.getSellers().subscribe(
      (response: Seller[]) => {
        this.sellers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onDeleteSeller(Sellerid: number): void
  {
   
   this.loginService.deleteSellerUser(Sellerid).subscribe(
     (response: void) => {
       console.log(response);
       this.getSellers;
     },
     (error: HttpErrorResponse) =>{
       alert(error.message); 
     }
   ); 
  }

}
