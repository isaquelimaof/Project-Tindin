import { NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations:
    [
      LoginComponent,

    ],
  imports:
    [
      FormsModule,
      CommonModule,
      MatToolbarModule,
      RouterModule,
      HttpClientModule,
      MatCardModule,
    ],
  exports:
    [
      LoginComponent,

    ],
  providers: [],
  bootstrap: [
    LoginComponent,

  ]
})
export class LoginModule {

}
