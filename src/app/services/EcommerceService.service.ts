import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private URL = 'http://localhost/donutsLapiliB/web/index.php/'
  private UrlShopping = 'http://localhost/donutsLapiliB/web/'

  constructor( private http: HttpClient ) { }

  getProducts() {
    return this.http.get(`${this.URL}apiproducts/product`)
  }

  getProduct(id:string) {
    return this.http.get(`${this.URL}apiproducts/${id}`)
  }

  createProducts( product:ProductModel ) {
    return this.http.post(`${this.URL}apiproducts`, product)
  }

  deleteProduct(id:number) {
    return this.http.delete(`${this.URL}apiproducts/${id}`)
  }

  updateProduct( product: ProductModel ) {
    return this.http.put(`${this.URL}apiproducts/${product.idProduct}`, product)
  }

  getShoppingCart(id:string) {
    return this.http.get(`${this.UrlShopping}apishoppings/watch?idUser=${id}`)
  }

  postShoppingCart(cart: CartModel) {
    return this.http.post(`${this.UrlShopping}apishoppings`, cart)
  }

  deleteShoppingCart(id:string) {
    return this.http.delete(`${this.UrlShopping}apishoppings/${id}`)
  }

  deleteShoppingCarts() {
    return this.http.delete('http://localhost/donutsLapiliB/web/apishoppings/erase?idUser=52')
  }

  getNewOrder(id:string) {
    return this.http.get(`http://localhost/donutsLapiliB/web/apiorders/new-order?idUser=${id}`)
  }
}

