import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from 'src/app/models/product.model';
import { EcommerceService } from 'src/app/services/EcommerceService.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  styles: [
  ]
})
export class RegisterProductsComponent implements OnInit {
  product: ProductModel = new ProductModel();

  constructor( private ecommerce: EcommerceService ) {
    this.ecommerce.getProducts()
  }

  ngOnInit(): void {
  }

  save( form:NgForm ) {
    if(form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return
    }
    this.validateDate(form.value.startDate, form.value.finalDate)
    console.log(form.value)

    this.ecommerce.createProducts(this.product)
      .subscribe(resp => {
        console.log(resp)
      })
  }

  validateDate(fisrtDate: any, secondDate:any) {
    if(fisrtDate > secondDate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La fecha final no puede ser menor que la final.',
      })
      return
    }
  }

}
