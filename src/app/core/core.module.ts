import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar-component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { Error404Component } from "./components/error-404/error-404.component";
import { RouterModule } from "@angular/router";
import { PageLoginComponents } from "../pages/pageLogin/pageLogin.component";

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component,
    PageLoginComponents

  ],
  imports: [
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent,
    PageLoginComponents

  ]
})
export class CoreModule {

}
