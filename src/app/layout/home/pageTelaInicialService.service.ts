import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestCarousel } from "./model/RequestCarousel";
import { ResponseCarousel } from "./model/ResponseCarousel";




@Injectable({
  providedIn: 'root'
})
export class PageTelaInicialService {

  telaInicialUrl = 'https://api-labs.tindin.com.br/games';
  deleteGameUrl = 'https://api-labs.tindin.com.br/games/{gameId}'

  buscaId: RequestCarousel = new RequestCarousel();

  constructor(private httpClient: HttpClient) {

   }

  public doCarousel(): Observable<ResponseCarousel> {
    return this.httpClient.get<ResponseCarousel>(this.telaInicialUrl);
  }

  public deleteGame(_id: string): Observable<RequestCarousel> {
    return this.httpClient.delete<RequestCarousel>(this.deleteGameUrl + _id)
  }

}
