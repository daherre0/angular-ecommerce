import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from "./pages/register/register.component";


import { BuyProductComponent } from './pages/buy-product/buy-product.component';

import { HomeComponent } from './pages/home/home.component';

import { RegisterProductsComponent } from './pages/register-products/register-products.component';
import { TableProductsComponent } from './pages/table-products/table-products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },

  { path: 'register-products/:id', component: RegisterProductsComponent },
  { path: 'products', component: TableProductsComponent },
  { path: 'buy/:id', component: BuyProductComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
