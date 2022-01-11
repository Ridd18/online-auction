import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  title: any;
  

  constructor( private httpClient: HttpClient) { }

  
  ngOnInit(): void {

         
  }

}
