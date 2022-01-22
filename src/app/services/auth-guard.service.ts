import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  adminLogin()
  { 
        return !!localStorage.getItem("Admin");  
  } 

  bidderLogin()
  { 
        return !!localStorage.getItem("Bidder");  
  } 

  sellerLogin()
  { 
        return !!localStorage.getItem("Seller");  
  } 
}
