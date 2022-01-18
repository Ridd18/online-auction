import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  public feedback: Feedback[]; 

  constructor(private auth: RegistrationService , private router: Router) { }

  ngOnInit(): void {
  }

  public addFeedback(addFeedbackForm: NgForm)
  {
    
    this.auth.addFeedback(addFeedbackForm.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/feedbackHome']);

      },
      err => console.log(err)
    )
  }


}
