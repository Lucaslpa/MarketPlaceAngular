import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { ProductCart } from 'src/models/product';


@Injectable({
     providedIn: 'root'
})
export class CartStore { 
       constructor() { 
           this.updateCart()
       }

     private CartState = new BehaviorSubject<ProductCart[]>([]);

 
        getCart() {
            return this.CartState.asObservable();
        }

        updateCart() {
            const cart = JSON.parse(localStorage.getItem('cart') || `[]`)
            this.CartState.next(cart);
        }
}