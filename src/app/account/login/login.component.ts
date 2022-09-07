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

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.accountService.login(this.requestLogin).subscribe({
      next: result => {
        if (result && result.token) {
          window.localStorage.setItem('token', result.token)
          this.router.navigate(['app-home']);
          return true;
        }
        return false
      }, error: err => console.log('ERROR: ' , err)
    })
    return true;
  }
}

