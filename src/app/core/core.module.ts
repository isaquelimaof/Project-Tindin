import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar-component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { Error404Component } from "./components/error-404/error-404.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
  bootstrap: [
    NavBarComponent,
    ]
})
export class CoreModule {

}
