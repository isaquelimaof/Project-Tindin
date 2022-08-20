import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageTelaInicialComponent } from "./telaInicial/telaInicial.component";
import { PageLoginComponents } from "./pageLogin/pageLogin.component";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations:
    [
      PageLoginComponents,
      PageTelaInicialComponent

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
      PageTelaInicialComponent

    ],
    providers: [],
    bootstrap: [
      PageLoginComponents,
      PageTelaInicialComponent
      ]
})
export class PageloginModule {

}
