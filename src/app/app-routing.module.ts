import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register-products', component: RegisterProductsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
