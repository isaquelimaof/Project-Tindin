import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../login/model/RequestLogin';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loginUrl = 'https://api-labs.tindin.com.br/auth';
  resLogin: RequestLogin = new RequestLogin();

  constructor(private httpClient: HttpClient) { }

  public login(requestLogin: RequestLogin): Observable<RequestLogin> {
    this.httpClient.post<RequestLogin>(`${this.loginUrl}`, requestLogin).subscribe({
      next: result => {
       window.localStorage.setItem('token','_id');
        return result;
      }
    })
    return this.httpClient.post<RequestLogin>(`${this.loginUrl}`, requestLogin)
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
