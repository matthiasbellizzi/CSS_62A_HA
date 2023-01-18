import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isUserLoggedIn: any = localStorage.getItem('isUserLoggedIn');

    console.log(isUserLoggedIn);
    if (isUserLoggedIn == "false") {
      alert("User cannot access this page");
      return false;
    }else{
      return true;
    }
    
  }
  
}
