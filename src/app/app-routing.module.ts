import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponents } from './pages/pageLogin/pageLogin.component';
import { TelaInicialComponent } from './pages/telaInicial/telaInicial.component';

const routes: Routes = [
  {path: '',component: TelaInicialComponent},
  {path: 'telaInicial',component: TelaInicialComponent},
  {path: 'pageLogin', component: PageLoginComponents}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
