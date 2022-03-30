import { Product } from './../../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/products/';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private Http: HttpClient) {}

  Get: Observable<Product[]>  = this.Http.get<Product[]>(API_URL);

  GetOne(id: number) { 
     return this.Http.get<Product>(API_URL + `${id}`, {
       responseType: 'json'
     });
  }

  buyProduct(product: Product) {
    product.quantity--;
    return this.Http.put<Product>(API_URL + `${product.id}`, product, {
      observe: 'response',
      responseType: 'json'
    });
  }
}
