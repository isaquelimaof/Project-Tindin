import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseCarousel } from "../pages/pageTelaInicial/model/ResponseCarousel";




@Injectable({
  providedIn: 'root'
})
export class PageTelaInicialService {

  telaInicialUrl = 'https://api-labs.tindin.com.br/games';

  constructor(private httpClient: HttpClient) { }

  public doCarousel(): Observable<ResponseCarousel>{
    return this.httpClient.get<ResponseCarousel>(this.telaInicialUrl);
  }
}
