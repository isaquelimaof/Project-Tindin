import { Component, Input, OnInit } from "@angular/core";
import { error } from "jquery";
import { PageLoginService } from "src/app/service/pageLoginService.service";
import { RequestLogin } from "./model/RequestLogin";

@Component({
  selector: 'pageLogin',
  templateUrl: './pageLogin.component.html',
  styleUrls: ['./pageLogin.component.css']
})
export class PageLoginComponents implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin();




  constructor(private loginService: PageLoginService) { }

  ngOnInit(): void {

  }

  public doLogin() {
    return this.loginService.doLogin(this.requestLogin).subscribe({
      next: data => {
        console.log(data);

        if (this.requestLogin.email === "master@tindin.com.br" && this.requestLogin.password === "123") {
          this.requestLogin.sucesso = false;
          console.log("Result:  " + this.requestLogin.sucesso);
          return (`${this.requestLogin}`);
        } else {
          this.requestLogin.sucesso = true;
          console.log("Result:  " + this.requestLogin.sucesso);
          return (`${this.requestLogin}`);
        }

      }, error: err => {
        this.requestLogin.sucesso = true;
        console.log("Result:  " + this.requestLogin.sucesso);
        return (`${this.requestLogin}` + err);
        //error: err => console.log('Error', err)}
      },
    })
  }
}




