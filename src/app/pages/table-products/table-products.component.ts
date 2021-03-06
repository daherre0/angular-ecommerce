import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { EcommerceService } from 'src/app/services/EcommerceService.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styles: [
  ]
})
export class TableProductsComponent implements OnInit {
  filterProduct = '';
  products: ProductModel[] = [];

  constructor( private ecommerce: EcommerceService, private route: Router ) {
    this.ecommerce.getProducts()
      .subscribe((resp:any) => {
        this.products = resp
        console.log(this.products)
      })
  }

  ngOnInit(): void {

  }

  deleteProduct(product:any, i:number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Estás seguro que desea borrar a "${product.title}"`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value) {
        this.ecommerce.deleteProduct(product.idProduct)   //eliminar de la base ed datos
          .subscribe(() => {
              this.ecommerce.getProducts()
              .subscribe((resp:any) => {
                this.products = resp
              })
          });
      }
    })
  }
}
