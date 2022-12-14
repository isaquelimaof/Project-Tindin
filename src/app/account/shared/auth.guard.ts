import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RequestLogin } from '../login/model/RequestLogin';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  requestLogin: RequestLogin = new RequestLogin();

  constructor(private router: Router,  private accountService: AccountService) { }

  canActivate(): boolean {
    const token = window.localStorage.getItem('token');
    if (this.accountService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['app-login']);
      return false;
    }
  }
}

/*next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
*/
