import { Component, Input, OnInit } from "@angular/core";
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
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe({
      next: data => {
        console.log(data);
        //console.log(this.requestLogin);
      },
      error: err => console.log('Error', err)
    })
  }
}
