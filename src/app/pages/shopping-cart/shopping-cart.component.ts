import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/EcommerceService.service';
import { UsersService } from 'src/app/users/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  public userId: string = '';
  public carts:any[] = [];
  public totalProducts!: number;

  constructor( private ecommerceService: EcommerceService, private userService: UsersService, private route: Router  ) { }

  ngOnInit(): void {
    this.userId = this.userService.getUserId()
    this.ecommerceService.getShoppingCart(this.userId)
      .subscribe((resp:any) => {
        this.carts = resp,
        console.log(this.carts);
        this.totalProducts = this.getTotalProducts(this.carts)
      })

  }

  getTotalProducts (carts:any) {
    let total: number = 0;
    const subTotales = carts.map(function(cart:any) {
      return Number(cart.unitValue) * Number(cart.quantity);
    })
    console.log(subTotales)
    for(let subTotal of subTotales) {
      total += subTotal;
    }
    return total;
  }

  deleteProduct(cart:any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Estás seguro que desea borrar a "${cart.title}"`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value) {
        this.ecommerceService.deleteShoppingCart(cart.idShopping)   //eliminar de la base ed datos
          .subscribe(() => {
              this.ecommerceService.getShoppingCart(this.userId)
              .subscribe((resp:any) => {
                this.carts = resp
                this.totalProducts = this.getTotalProducts(this.carts)
              })
          });
      }
    })
  }

  comprar() {
    Swal.fire({
      title: '¿Desea terminar su compra?',
      text: "Confirmar compra",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ecommerceService.getNewOrder(this.userId)
          .subscribe(() => {
            this.route.navigate(['/home'])
          });
      }
    })
  }
}
