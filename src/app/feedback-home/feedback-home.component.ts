import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Feedback } from '../feedback';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-feedback-home',
  templateUrl: './feedback-home.component.html',
  styleUrls: ['./feedback-home.component.css']
})
export class FeedbackHomeComponent implements OnInit {

  public feedbacks: Feedback[];


  constructor(private router: Router, 
    private service: RegistrationService, 
    private http: HttpClient) { }

  ngOnInit(): void {

    this.getFeedbacks();
  }

  public getFeedbacks(): void
  {
    this.service.getFeedbacks().subscribe(
      (response: Feedback[]) => {
        this.feedbacks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
