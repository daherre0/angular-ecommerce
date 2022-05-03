import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public incorrectDate = false;

  constructor( private ecommerce: EcommerceService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo') {
      this.ecommerce.getProduct(id)
        .subscribe((resp:any) => {
          this.product = resp
        })
    }
  }



  /**
   * If the form is invalid, mark all the controls as touched, otherwise, validate the dates and if
   * they are correct, create or update the product
   * @param {NgForm} form - NgForm
   * @returns The product is being returned.
   */
  save( form:NgForm ) {
    if(form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return
    }
    this.validateDate(form.value.startDate, form.value.finalDate)
    if(!this.incorrectDate) {
      if(this.product.idProduct) {
        this.ecommerce.updateProduct(this.product)
        .subscribe( resp => {
          Swal.fire({
            icon: 'success',
            title: 'Tu producto ha sido actualizado satisfactoriamente',
            showConfirmButton: false,
            timer: 1500
          })
        })
      } else {
        console.log(this.product)
        this.ecommerce.createProducts(this.product)
      .subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'Tu producto ha sido guardado satisfactoriamente',
          showConfirmButton: false,
          timer: 1500
        })
      })
      }
    }
  }


  //validate if the date are correct
  validateDate(fisrtDate: any, secondDate:any) {
    if(fisrtDate > secondDate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La fecha final no puede ser menor que la Inicial.',
      })
      this.incorrectDate = true;
    } else {
      this.incorrectDate = false;
    }
  }

}
