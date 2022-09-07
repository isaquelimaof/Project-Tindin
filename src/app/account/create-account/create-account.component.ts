import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from '../login/model/RequestLogin';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  requestLogin!: RequestLogin;

  constructor( private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }

  /*async onSubmit (){
    try {
      const result = await this.accountService.createAccount(this.requestLogin);
      this.router.navigate(['app-home'])

      // exibir uma msg amigavel aqui
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }*/

}
