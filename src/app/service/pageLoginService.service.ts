import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../pages/pageLogin/model/RequestLogin';
import { ResponseLogin } from '../pages/pageLogin/model/ResponseLogin';


@Injectable({
  providedIn: 'root'
})
export class PageLoginService {

  telaLoginUrl= 'https://api-labs.tindin.com.br/auth';

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {

    return this.httpClient.post<ResponseLogin>(this.telaLoginUrl, requestLogin)

  }
}
