import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginComponent } from "src/app/account/login/login.component";
import { RequestLogin } from "src/app/account/login/model/RequestLogin";
import { RequestCarousel } from "./model/RequestCarousel";
import { ResponseCarousel } from "./model/ResponseCarousel";




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  lisGameslUrl = 'https://api-labs.tindin.com.br/games';
  updateGameslUrl = 'https://api-labs.tindin.com.br/games';
  deleteGameUrl = 'https://api-labs.tindin.com.br/games/{gameId}'

  buscaId: RequestCarousel = new RequestCarousel();
  buscarToken: RequestLogin = new RequestLogin();
  validarLogin!: LoginComponent;

  constructor(private httpClient: HttpClient) {

  }

  public doListGames(): Observable<ResponseCarousel> {
    return this.httpClient.get<ResponseCarousel>(this.lisGameslUrl);
  }

  public doUpdateGames(_id: string) {
    return this.httpClient.put<ResponseCarousel>(this.updateGameslUrl, _id);
  }

}
