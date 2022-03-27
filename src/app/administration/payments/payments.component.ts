import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/buyer';
import { Payment } from 'src/app/payment';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  public buyers: Buyer[];

  public payments: Payment[];

  id: number;

  public payment: Payment = new Payment();

  constructor(private router: Router, private service: RegistrationService) {}

  ngOnInit(): void {
    this.getPayments();
  }

  public getPayments(): void {
    this.service.getPayments().subscribe(
      (response: Payment[]) => {
        this.payments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePayment(paymentId: number): void {
    this.service.deleteBuyerUser(paymentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPayments;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
