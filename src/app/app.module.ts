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
import { TableProductsComponent } from './pages/table-products/table-products.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterProductsComponent,
    TableProductsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EcommerceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
