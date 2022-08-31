import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/account/login/login.component';
import { RequestLogin } from 'src/app/account/login/model/RequestLogin';
import { HomeService } from 'src/app/layout/home/homeService.service';
import { RequestCarousel } from './model/RequestCarousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() images: RequestCarousel[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 1500;
  selectedIndex = 0;
  requestCarousel: RequestCarousel[] = [];
  request: RequestCarousel = new RequestCarousel();
  pageLogin!: RequestLogin;
  login!: LoginComponent;
  teste!: RequestCarousel;


  constructor(private telaInicialService: HomeService) { }

  ngOnInit(): void {

    this.doCarousel();

    if (this.autoSlide) {
      this.autoSlideImages();
    }

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
