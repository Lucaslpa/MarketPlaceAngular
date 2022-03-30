import { Injectable } from '@angular/core';
import { Product, ProductCart } from 'src/models/product';



@Injectable({
    providedIn: 'root'
})
export class CartService {
    
    getAllProductsFromCart(): ProductCart[]  { 
        return JSON.parse(localStorage.getItem('cart') || `[]`);
    }

    addToCart(product: ProductCart): boolean  {
        const oldCard: ProductCart[] = JSON.parse(localStorage.getItem('cart') || `[]`);
       const finded =  oldCard.find(p => p.id === product.id) 
        if(finded) return false
        localStorage.setItem('cart', JSON.stringify([product, ...oldCard]));
        return true;
      } 
    
      removeFromCart(product: ProductCart) {
        const oldCard: ProductCart[] = JSON.parse(localStorage.getItem('cart') || `[]`);
        console.log(oldCard)
        localStorage.setItem('cart', JSON.stringify(oldCard.filter(p => p.id !== product.id)));
      }
}