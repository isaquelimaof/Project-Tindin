import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestLogin } from '../pages/pageLogin/model/RequestLogin';
import { ResponseLogin } from '../pages/pageLogin/model/ResponseLogin';
import { RequestCarousel } from '../pages/pageTelaInicial/model/RequestCarousel';


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

  /*get autorizado(){
    return this.doLogin(this.teste);
  }*/

}
