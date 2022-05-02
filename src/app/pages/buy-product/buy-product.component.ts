import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { EcommerceService } from 'src/app/services/EcommerceService.service';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/models/cart.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: []
})
export class BuyProductComponent implements OnInit {
  product: any = {};
  userId!:string;
  productCar: CartModel = new CartModel

  constructor( private activeRoute: ActivatedRoute, private ecommerce: EcommerceService, private userService: UsersService, private router: Router ) {
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

  readIdUser() {
    this.userId = this.userService.getUserId();
  }

  addProduct(idProduct:string, quantity:string) {

    this.userId = this.userService.getUserId();

    if(this.userService.getUserId() !== '') {
      this.productCar.idUser = this.userService.getUserId();
      this.productCar.quantity = quantity;
      this.productCar.idProduct = idProduct;

      console.log(this.productCar)

      this.ecommerce.postShoppingCart(this.productCar)
    .subscribe(() => {
      this.router.navigate(['/cart', this.userId]);
    });
    } else {
      Swal.fire({
        title: 'Iniciar sesión',
        text: "Para agregar productos al carrito debes iniciar sesión",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iniciar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/login');
        }
      })
    }
  }

}
