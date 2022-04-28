import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { EcommerceService } from 'src/app/services/EcommerceService.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: []
})
export class BuyProductComponent implements OnInit {
  product: any = {};

  constructor( private activeRoute: ActivatedRoute, private ecommerce: EcommerceService ) {
    this.activeRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.ecommerce.getProduct(params['id'])
        .subscribe(( resp:any) => {
          this.product = resp
          console.log(this.product)
        })
    })
  }

  ngOnInit(): void {
  }

}
