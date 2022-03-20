import { Product } from './../../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private Http: HttpClient) {}

  Get: Observable<Product[]>  = this.Http.get<Product[]>('http://localhost:3000/products');

  GetOne(id: number) { 
     return this.Http.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
