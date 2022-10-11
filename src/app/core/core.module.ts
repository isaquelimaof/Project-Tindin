import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar-component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { Error404Component } from "./components/error-404/error-404.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    MatToolbarModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [
    NavBarComponent,
    FooterComponent
    ]
})
export class CoreModule {

}
