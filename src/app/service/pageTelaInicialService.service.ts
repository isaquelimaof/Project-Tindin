import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestTelaInicial } from "../pages/telaInicial/model/RequestTelaInicial";
import { ResponseTelaInicial } from "../pages/telaInicial/model/ResponseTelaInicial";


@Injectable({
  providedIn: 'root'
})
export class PageTelaInicialService {

  telaInicialUrl = 'https://api-labs.tindin.com.br/games';

  constructor(private httpClient: HttpClient) { }

  public doCarouselTelaInicial(): Observable<ResponseTelaInicial>{
    return this.httpClient.get<ResponseTelaInicial>(this.telaInicialUrl);
  }
}
