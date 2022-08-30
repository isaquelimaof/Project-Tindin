import { NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations:
    [
      HomeComponent

    ],
  imports:
    [
      FormsModule,
      CommonModule,
      MatToolbarModule,
      MatCardModule,
    ],
  exports:
    [
      HomeComponent,

    ],
  providers: [],
  bootstrap: [
    HomeComponent

  ]
})
export class HomeModule {

}
