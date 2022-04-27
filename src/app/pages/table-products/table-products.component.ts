import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { EcommerceService } from 'src/app/services/EcommerceService.service';

import Swal from 'sweetalert2';
Swal
@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styles: [
  ]
})
export class TableProductsComponent implements OnInit {
  filterProduct = '';
  products: ProductModel[] = [];

  constructor( private ecommerce: EcommerceService ) {

  }

  ngOnInit(): void {
    this.ecommerce.getProducts()
      .subscribe((resp:any) => {
        this.products = resp
      })
  }

  deleteProduct(product:any, idProduct:number, i:number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Estás seguro que desea borrar a ${product.title}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value) {
        this.products.splice(i, 1)
        this.ecommerce.deleteProduct(idProduct)
        .subscribe();
      }
    })
  }
}
