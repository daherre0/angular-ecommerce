import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { EcommerceService } from 'src/app/services/EcommerceService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  products: ProductModel[] = [];
  constructor( private ecommerce: EcommerceService ) {
    this.ecommerce.getProducts()
        .subscribe((resp:any) => {
          this.products = resp
          console.log(this.products)
        })
      }
  ngOnInit(): void {
  }

}
