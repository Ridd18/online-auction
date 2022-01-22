import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { AuthGuardService } from './services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private Authguardservice: AuthGuardService, private router: Router) {} 

  
  canActivate() :boolean 
   {
    if (this.Authguardservice.adminLogin() || this.Authguardservice.bidderLogin() || this.Authguardservice.sellerLogin()) {  
      return true;
  } else
  {
    this.router.navigateByUrl("/login"); 
    return false;
  } 
 
  }
  
}
