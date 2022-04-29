import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

import { ProductModel } from 'src/app/models/product.model';
import { EcommerceService } from 'src/app/services/EcommerceService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  user!: any;
  products: ProductModel[] = [];

  constructor( private ecommerce: EcommerceService, public usersService: UsersService ) {
    this.ecommerce.getProducts()
        .subscribe((resp:any) => {
          this.products = resp
          console.log(this.products)
        })
      }
  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged(){
  this.usersService.getUser(this.usersService.getUserId()).subscribe(user => {
    console.log(user);
    this.user = user;
  })
};

logout(){
  this.usersService.logout;
}
}
