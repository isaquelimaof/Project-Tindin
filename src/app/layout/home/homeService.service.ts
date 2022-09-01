import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestCarousel } from "./model/RequestCarousel";
import { ResponseCarousel } from "./model/ResponseCarousel";




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  telaInicialUrl = 'https://api-labs.tindin.com.br/games';
  deleteGameUrl = 'https://api-labs.tindin.com.br/games/{gameId}'

  buscaId: RequestCarousel = new RequestCarousel();

  constructor(private httpClient: HttpClient) {

   }

  public doCarousel(): Observable<ResponseCarousel> {
    return this.httpClient.get<ResponseCarousel>(this.telaInicialUrl);
  }

}
