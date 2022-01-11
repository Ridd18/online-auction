import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Buyer} from './buyer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private apiServerUrl= environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

   

    public getBuyers(): Observable<Buyer[]>
    {
      return this.http.get<Buyer[]>(`${this.apiServerUrl}/auction/buyer/all`);
    }

  }

