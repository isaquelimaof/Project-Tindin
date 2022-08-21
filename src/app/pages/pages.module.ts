import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageLoginComponents } from "./pageLogin/pageLogin.component";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { CarouselComponent } from "./pageTelaInicial/carousel-component/carouselTelaInicial.component";


@NgModule({
  declarations:
    [
      PageLoginComponents,
      CarouselComponent

    ],
  imports:
    [
      FormsModule,
      CommonModule,
      MatToolbarModule,
      MatCardModule
    ],
  exports:
    [
      PageLoginComponents,
      CarouselComponent

    ],
    providers: [],
    bootstrap: [
      PageLoginComponents,
      CarouselComponent
      ]
})
export class PageModule {

}
