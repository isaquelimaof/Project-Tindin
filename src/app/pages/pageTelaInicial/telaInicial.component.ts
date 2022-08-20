import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PageTelaInicialService } from 'src/app/service/pageTelaInicialService.service';
import { RequestTelaInicial } from './model/RequestTelaInicial';

declare const $: any;

@Component({
  selector: 'telaInicial',
  templateUrl: './pageTelaInicial.component.html',
  styleUrls: ['./pageTelaInicial.component.css']
})

export class PageTelaInicialComponent implements OnInit {

  resquestTelaInicial: RequestTelaInicial[] = [];

  constructor(private telaInicialService: PageTelaInicialService) { }

  ngOnInit(): void {
    this.doCarouselTelaInicial();
  }

  public doCarouselTelaInicial() {
    this.telaInicialService.doCarouselTelaInicial().subscribe({
      next: result => {
        this.resquestTelaInicial = result.games;
        console.log(this.resquestTelaInicial);
      },
      error: err => console.log('Error', err)
    })
  }
}
