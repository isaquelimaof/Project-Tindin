import { NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

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
      RouterModule,
      MatIconModule,
      HttpClientModule,
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
