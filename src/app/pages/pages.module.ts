import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageTelaInicialComponent } from "./telaInicial/telaInicial.component";
import { PageLoginComponents } from "./pageLogin/pageLogin.component";
import { CommonModule } from "@angular/common";

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
    ],
  exports:
    [
      PageLoginComponents,
      PageTelaInicialComponent

    ]
})
export class PageloginModule {

}
