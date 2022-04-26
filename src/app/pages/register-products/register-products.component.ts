import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  styles: [
  ]
})
export class RegisterProductsComponent implements OnInit {
  product = {
    title: 'title',
    description: 'desc',
    price: '10.000',
    discount: '2.500',
    startDate: '',
    finalDate: '',
    image: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  save( form:NgForm ) {
    if(form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return
    }
    this.validateDate(this.product.startDate, this.product.finalDate)
    console.log(form.value)
  }

  validateDate(fisrtDate: any, secondDate:any) {
    fisrtDate = new Date(fisrtDate);
    secondDate = new Date(secondDate);
    if(fisrtDate > secondDate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La fecha final no puede ser menor que la final.',
      })
    }
  }

}
