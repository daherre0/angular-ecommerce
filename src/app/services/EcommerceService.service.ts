import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private URL = 'http://localhost/donutsLapiliB/web/index.php/'

  constructor( private http: HttpClient ) { }

  getProducts() {
    this.http.get(`${this.URL}apiproducts`)
      .subscribe(data => {
        console.log(data)
      })
  }

  createProducts( product:any ) {
    return this.http.post(`${this.URL}apiproducts`, product)
  }

  // createProducts( product:any ) {
  //   const url = `${this.URL}apiproducts`;
  //   const params = new HttpParams()
  //     .set('title', product.title)
  //     .set('description', product.description)
  //     .set('image', product.image)
  //     .set('unitValue', product.price)
  //     .set('finalDate', product.finalDate)
  //     .set('startDate', product.startDate)
  //     .set('discount', product.discount)

  //   return this.http.post(url, { params })
  // }
}
