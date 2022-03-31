import { CartStore } from 'src/store/cart.store';
import { Injectable } from '@angular/core';
import { Product, ProductCart } from 'src/models/product';



@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private CartStore: CartStore) { }
    
    getAllProductsFromCart(): ProductCart[]  { 
        return JSON.parse(localStorage.getItem('cart') || `[]`);
    }

    addToCart(product: ProductCart): boolean  {
        const oldCard: ProductCart[] = JSON.parse(localStorage.getItem('cart') || `[]`);
       const finded =  oldCard.find(p => p.id === product.id) 
        if(finded) return false
        localStorage.setItem('cart', JSON.stringify([product, ...oldCard]));
        this.CartStore.updateCart()
        return true;
      } 
    
      removeFromCart(product: ProductCart) {
        const oldCard: ProductCart[] = JSON.parse(localStorage.getItem('cart') || `[]`);
        console.log(oldCard)
        localStorage.setItem('cart', JSON.stringify(oldCard.filter(p => p.id !== product.id)));
        this.CartStore.updateCart()
      }
}