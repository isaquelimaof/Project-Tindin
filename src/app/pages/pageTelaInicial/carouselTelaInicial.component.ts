import { Component, Input, OnInit } from '@angular/core';
import { PageTelaInicialService } from 'src/app/service/pageTelaInicialService.service';
import { RequestCarousel } from './model/RequestCarousel';

@Component({
  selector: 'pageTelaInicial',
  templateUrl: './carouselTelaInicial.component.html',
  styleUrls: ['./carouselTelaInicial.component.css']
})

export class CarouselComponent implements OnInit {

  @Input() images!: RequestCarousel[];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  selectedIndex = 0;
  requestCarousel: RequestCarousel[] = [];

  constructor(private telaInicialService: PageTelaInicialService) { }

  ngOnInit(): void {
    this.doCarousel();

  }

  public doCarousel() {
    this.telaInicialService.doCarousel().subscribe({
      next: result => {
        this.requestCarousel = result.games
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
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
