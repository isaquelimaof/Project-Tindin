import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { AuthGuard } from '../shared/auth.guard';
import { RequestLogin } from './model/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  requestLogin: RequestLogin = new RequestLogin();

  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    return this.accountService.login(this.requestLogin).subscribe({
      next: result => {
        this.requestLogin = result
        if (this.requestLogin) {
          result.acesso = true;
        }
        this.router.navigate(['app-login']);
        this.router.navigate(['app-home']);
        console.log("Codigo Tokem:  " + this.requestLogin.token);
        console.log("Codigo _id:  " + this.requestLogin.user._id);
        console.log("Codigo Acesso:  " + this.requestLogin.acesso);
      },
      error: (err: any) => {
        this.requestLogin.acesso = false;
        return console.error(err)
      }
    })
  }

}

/* return this.accountService.login(this.requestLogin).subscribe({
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
  })*/
