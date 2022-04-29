import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private URL = 'http://localhost/donutsLapiliB/web/index.php/'

  constructor( private http: HttpClient ) { }

  getProducts() {
    return this.http.get(`${this.URL}apiproducts`)
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
}
