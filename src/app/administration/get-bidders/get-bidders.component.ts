import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/buyer';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-get-bidders',
  templateUrl: './get-bidders.component.html',
  styleUrls: ['./get-bidders.component.css']
})
export class GetBiddersComponent implements OnInit {

  public buyers: Buyer[];

  constructor(private router: Router, private loginService: RegistrationService) { }

  ngOnInit(): void {
    this.getBidders();
  }

  public getBidders(): void
  {
    this.loginService.getBuyers().subscribe(
      (response: Buyer[]) => {
        this.buyers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBidder(Buyerid: number): void
  {
   
   this.loginService.deleteBuyerUser(Buyerid).subscribe(
     (response: void) => {
       console.log(response);
       this.getBidders;
     },
     (error: HttpErrorResponse) =>{
       alert(error.message); 
     }
   ); 
  }


}
