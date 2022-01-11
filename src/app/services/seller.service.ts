import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seller } from '../seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private apiServerUrl= environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

   

    public getSellers(): Observable<Seller[]>
    {
      return this.http.get<Seller[]>(`${this.apiServerUrl}/auction/seller/all`);
    }
}
