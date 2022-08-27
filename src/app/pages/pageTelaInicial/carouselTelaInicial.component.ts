import { Component, Input, OnInit } from '@angular/core';
import { PageLoginService } from 'src/app/service/pageLoginService.service';
import { PageTelaInicialService } from 'src/app/service/pageTelaInicialService.service';
import { RequestLogin } from '../pageLogin/model/RequestLogin';
import { PageLoginComponents } from '../pageLogin/pageLogin.component';
import { RequestCarousel } from './model/RequestCarousel';
import { ResponseCarousel } from './model/ResponseCarousel';

@Component({
  selector: 'pageTelaInicial',
  templateUrl: './carouselTelaInicial.component.html',
  styleUrls: ['./carouselTelaInicial.component.css']
})

export class CarouselComponent implements OnInit {

  @Input() images: RequestCarousel[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 1500;
  selectedIndex = 0;
  requestCarousel: RequestCarousel[] = [];
  request: RequestCarousel = new RequestCarousel();
  pageLogin!: RequestLogin;
  login!: PageLoginComponents;
  loginService!: PageLoginService;
  teste!: ResponseCarousel;


  constructor(private telaInicialService: PageTelaInicialService) { }

  ngOnInit(): void {

    this.doCarousel();

    if (this.autoSlide) {
      this.autoSlideImages();
    }

    if (this.pageLogin) {
    this.deleteGame();
    }
  }

  public deleteGame() {
    this.telaInicialService.deleteGame().subscribe({
      next: result => {
        this.teste.gameId = result.gameId
      },
      error: err => console.log('Error', err)
    })
  }


  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  doCarousel() {
    this.telaInicialService.doCarousel().subscribe({
      next: result => {
        //this.requestCarousel = result.games
        this.images = result.games
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
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex !== 9) {
      if (this.selectedIndex === this.images.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    } else if (this.selectedIndex === 9) {
      this.selectedIndex = 11;
    }

  }
}
