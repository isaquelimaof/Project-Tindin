import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { RequestLogin } from "../account/login/model/RequestLogin";
import { AccountService } from "../account/shared/account.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  requestLogin!: RequestLogin;

  constructor(
    private accountService: AccountService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.accountService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if (token && this.accountService.getAuthorizationToken()) {
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(request)
      .pipe(
        catchError(this.handlerError)
      );
  }

  private handlerError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`
      );
    }
    return throwError (() => ('Ocorreu um erro, tente novamente '))
  }
}



