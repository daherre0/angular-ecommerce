import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';
import { FormsModule } from '@angular/forms';
import { EcommerceService } from './services/EcommerceService.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CookieService } from 'ngx-cookie-service';

import { TableProductsComponent } from './pages/table-products/table-products.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BuyProductComponent } from './pages/buy-product/buy-product.component';
<<<<<<< HEAD
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
=======
>>>>>>> 64cf85540b29a3fd0a7672d75a61ae46aa839943

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterProductsComponent,
    LoginComponent,
    RegisterComponent,

    TableProductsComponent,
    FilterPipe,
<<<<<<< HEAD
    BuyProductComponent,

    AuthComponent
=======
    BuyProductComponent
>>>>>>> 64cf85540b29a3fd0a7672d75a61ae46aa839943
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
<<<<<<< HEAD
    EcommerceService, CookieService, AuthGuard
=======
    EcommerceService, CookieService
>>>>>>> 64cf85540b29a3fd0a7672d75a61ae46aa839943
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
