import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Buyer } from '../buyer';
import { Seller } from '../seller';
import { JwtModule } from '@auth0/angular-jwt';
import { Admin } from '../admin';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  

  private apiServerUrl = environment.apiBaseUrl;

  
  constructor(private http: HttpClient) { }


  //Bidders
  public getBuyers(): Observable<Buyer[]>
  {
    return this.http.get<Buyer[]>(`${this.apiServerUrl}/auction/buyer/all`);
  }

  public registerBuyerUser(buyer: Buyer): Observable<Buyer> {
    return this.http.post<Buyer>(`${this.apiServerUrl}/auction/buyer/add`, buyer);
  }

  public loginBuyerUser(buyer: Buyer): Observable<Buyer>
  {
    return this.http.post<Buyer>(`${this.apiServerUrl}/auction/buyer/login`, buyer);
  }

  public deleteBuyerUser(Buyerid: number): Observable<void> 
  {
    return this.http.delete<void>(`${this.apiServerUrl}/auction/buyer/delete/${Buyerid}`);

  }

  //Sellers
  public getSellers(): Observable<Seller[]>
  {
    return this.http.get<Seller[]>(`${this.apiServerUrl}/auction/seller/all`);
  }

  public registerSellerUser(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>(`${this.apiServerUrl}/auction/seller/add`, seller);
  }

  public loginSellerUser(seller: Seller): Observable<Seller>
  {
    return this.http.post<Seller>(`${this.apiServerUrl}/auction/seller/login`, seller);
  }

  public deleteSellerUser(Sellerid: number): Observable<void> 
  {
    return this.http.delete<void>(`${this.apiServerUrl}/auction/seller/delete/${Sellerid}`);

  }


  //Admin
  public loginAdmin(admin: Admin): Observable<Admin>
  {
    return this.http.post<Admin>(`${this.apiServerUrl}/auction/admin/login`, admin);
  }

  // logedIn()
  // {
  //   return !!localStorage.getItem('token')
  // }

  //Product
  public addProducts(product: Product): Observable <Product>
  {
    return this.http.post<Product>(`${this.apiServerUrl}/auction/product/add`,product)
  }




}
