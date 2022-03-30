import { UserService } from './../services/user.service';
import Swal from 'sweetalert2';
import { ProductsService } from './../services/products.service';
import { Observable, Subscription } from 'rxjs';
import { Product, ProductCart } from './../../models/product';
import { Component, OnInit } from "@angular/core";
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


type ProductCard = { 
     
}


@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {

   constructor(
       private CartService: CartService, 
       private ProductsService: ProductsService,
       private UserService: UserService,
   ) { }

    Products: ProductCart[] = [];
 

    ngOnInit(): void {
      this.Products  = this.CartService.getAllProductsFromCart()
    }

    onChangeBuyQuantity(product: ProductCart, event: Event) {
        const input = event.target as HTMLInputElement;
       this.Products.forEach(element => {
              if(element.id == product.id){
                element.buyQuantity = Number(input.value);;
              }
          }
       )    
    }

    buyProducts() {
       if(!this.UserService.isLogged()) return 
       if(this.Products.length == 0)  {
        Swal.fire({
            icon: 'warning',
            title: 'Não há produtos no carrinho!',
            text: 'Adicione produtos para comprar!',
        })
        return 
       }
        const subs: Subscription[] = [ ]
        this.Products.forEach(element => {
            const product: Product = { 
              description: element.description, 
              id: element.id,
              img: element.img,
              name: element.name,
              price: element.price,
              quantity: element.quantity - element.buyQuantity + 1
            }
            const subscribe = this.ProductsService.buyProduct(product).subscribe(() => {
                this.CartService.removeFromCart(element)
            })
            subs.push(subscribe)
        })
        Swal.fire({
            title: 'Compra realizada',
            icon: 'success',
            confirmButtonText: 'Ok'
            }).then(() => {
                subs.forEach(element => {element.unsubscribe()})}
            )
            
    }
 
    removeProduct(product: ProductCart) {
        this.CartService.removeFromCart(product)
    }
} 