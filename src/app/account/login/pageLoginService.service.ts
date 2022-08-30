import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestCarousel } from 'src/app/layout/home/model/RequestCarousel';
import { RequestLogin } from './model/RequestLogin';
import { ResponseLogin } from './model/ResponseLogin';



@Injectable({
  providedIn: 'root'
})
export class PageLoginService {

  telaLoginUrl = 'https://api-labs.tindin.com.br/auth';
  teste!: RequestCarousel;

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {

    return this.httpClient.post<ResponseLogin>(this.telaLoginUrl, requestLogin)

  }

}
