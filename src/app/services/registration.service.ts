import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Buyer } from '../buyer';
import { Seller } from '../seller';
import { JwtModule } from '@auth0/angular-jwt';
import { Admin } from '../admin';
import { Product } from '../product';
import { Image } from '../image';
import { Feedback } from '../feedback';
import { Bid } from '../bid';

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

  public getBidder(id: number): Observable<Buyer>
  {
    return this.http.get<Buyer>(`${this.apiServerUrl}/auction/buyer/find/${id}`);
  }

  public getBuyer(email: string): Observable<Buyer>
  {
    return this.http.get<Buyer>(`${this.apiServerUrl}/auction/buyer/findEmail/${email}`);
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

 
  public getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.apiServerUrl}/auction/product/all`);
  }

  public deleteProduct(Productid: number): Observable<void> 
  {
    return this.http.delete<void>(`${this.apiServerUrl}/auction/product/delete/${Productid}`);

  }

  public getProduct(id: number): Observable<Product>
  {
    return this.http.get<Product>(`${this.apiServerUrl}/auction/product/find/${id}`);
  }

  public editProduct(id: number, value: any): Observable<Object> 
  {
    return this.http.put(`${this.apiServerUrl}/auction/product/edit/${id}`, value);
  }

  public updateProduct(product: Product): Observable<Product>
  {
    return this.http.put<Product>(`${this.apiServerUrl}/auction/product/update`, product);
  }

//image
  public saveProductImage(imageFile : File): Observable<Image>
  {
    return this.http.post<Image>(`${this.apiServerUrl}/auction/image/save`,imageFile);
  }
  
//feedback
  public addFeedback(feedback: Feedback): Observable <Feedback>
  {
    return this.http.post<Feedback>(`${this.apiServerUrl}/auction/feedback/add`,feedback)
  }


  public getFeedbacks(): Observable<Feedback[]>
  {
    return this.http.get<Feedback[]>(`${this.apiServerUrl}/auction/feedback/all`);
  }

  //bid
  public addBid(bid: Bid): Observable <Bid>
  {
    return this.http.post<Bid>(`${this.apiServerUrl}/auction/bid/add`,bid)
  }


  public getBids(): Observable<Bid[]>
  {
    return this.http.get<Bid[]>(`${this.apiServerUrl}/auction/bid/all`);
  }

  public getBid(productName: string): Observable<Bid[]>
  {
    return this.http.get<Bid[]>(`${this.apiServerUrl}/auction/bid/find/${productName}`);
  }

  public getMaxBid(productId: number): Observable<Bid>
  {
    return this.http.get<Bid>(`${this.apiServerUrl}/auction/bid/sell/${productId}`);
  }

  // public sellProduct(productId: number): Observable<Bid>
  // {
  //   return this.http.post<Bid>(`${this.apiServerUrl}/auction/bid/sells/${productId}`);
  // }

}
