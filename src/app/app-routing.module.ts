import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponents } from './pages/pageLogin/pageLogin.component';

const routes: Routes = [
  {path: 'pageLogin', component: PageLoginComponents}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
