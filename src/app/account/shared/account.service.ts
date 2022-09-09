import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogin } from '../login/model/RequestLogin';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loginUrl = 'https://api-labs.tindin.com.br/auth';
  requestLogin!: RequestLogin;

  constructor(private httpClient: HttpClient) { }

  login(request: RequestLogin) {
    return this.httpClient.post<RequestLogin>(`${this.loginUrl}`, request);
  }


  async createAccount(account: any) {
    const result = this.httpClient.post<any>(`${this.loginUrl}/users`, account).subscribe();
    return result;

  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return decoded;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (token) {
      return true;
    } else if (this.isTokenExpired('token')) {
      return false;
    }
    return true;
  }
}
