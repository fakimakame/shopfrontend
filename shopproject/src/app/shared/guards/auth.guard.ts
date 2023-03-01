import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { buffer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token=sessionStorage.getItem('token')
    const isAuthenticated=this.isTokenExpired(token)
    if(isAuthenticated){
      return true
    }
    else {
      sessionStorage.clear();
      this.router.navigateByUrl('/');
      return false
    }
  }

  private isTokenExpired(token: any) {
    const expiry =(JSON.parse(window.atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }
  
}
