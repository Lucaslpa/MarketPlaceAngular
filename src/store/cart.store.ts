import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { ProductCart } from 'src/models/product';


@Injectable({
     providedIn: 'root'
})
class CartStore {
     private CartState = new BehaviorSubject<ProductCart[]>([]);


        getCart() {
            return this.CartState.asObservable();
        }

        addToCart(product: ProductCart) {
            const oldCard: ProductCart[] = JSON.parse(localStorage.getItem('cart') || `[]`);
            const finded =  oldCard.find(p => p.id === product.id) 
            if(finded) return false
            localStorage.setItem('cart', JSON.stringify([product, ...oldCard]));
            return true;
        }
}