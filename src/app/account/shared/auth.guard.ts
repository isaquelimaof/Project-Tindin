import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RequestLogin } from '../login/model/RequestLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  requestLogin: RequestLogin = new RequestLogin();

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem(this.requestLogin.token);
    if (token) {
      return true;
    } else {
      this.router.navigate(['app-login']);
      return false;
    }
  }
}
