import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponents } from './pages/pageLogin/pageLogin.component';
import { CarouselComponent } from './pages/pageTelaInicial/carouselTelaInicial.component';


const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'pageTelaInicial', component: CarouselComponent },
  { path: 'pageLogin', component: PageLoginComponents }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
