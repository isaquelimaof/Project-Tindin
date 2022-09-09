import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/account/login/login.component';
import { RequestLogin } from 'src/app/account/login/model/RequestLogin';
import { AccountService } from 'src/app/account/shared/account.service';
import { AuthGuard } from 'src/app/account/shared/auth.guard';
import { HomeService } from 'src/app/layout/home/homeService.service';
import { RequestCarousel } from './model/RequestCarousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() listGames: RequestCarousel[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 1500;
  selectedIndex = 0;
  requestCarousel!: RequestCarousel ;
  requestLogin!: RequestLogin;
  login!: LoginComponent;



  constructor(private telaInicialService: HomeService,
    private accountService: AccountService,
    private authGuard: AuthGuard) { }

  ngOnInit(): void {
    this.doListGames();
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }


  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  doListGames() {
    this.telaInicialService.doListGames().subscribe({
      next: result => {
        this.listGames = result.games
      },
      error: err => console.log('Error', err)
    })

  }

  // sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }


  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.listGames.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex !== 9) {
      if (this.selectedIndex === this.listGames.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    } else if (this.selectedIndex === 9) {
      this.selectedIndex = 11;
    }

  }

  getAuthorizationToken() {
    console.log(this.accountService.requestLogin.token)
  }

  title: string = '';

  alterarTitle() {
    if (this.authGuard.canActivate()) {
      this.telaInicialService.doUpdateGames('62bf3a3df5e33929107719c2').subscribe({
        next: result => {
          result[0].games
          this.requestCarousel.title = 'casa';
        },
        error: err => {
          console.log('ERROR: ', err)
        }

      })
    }
  }
}

