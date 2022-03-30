import { UserService } from './../../services/user.service';
import { CartService } from './../../services/cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Product, ProductCart } from './../../../models/product';
import { Component, OnInit } from "@angular/core";
import { catchError, switchMap, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent  { 
    
    
    constructor(private ProductsService: ProductsService, private router: ActivatedRoute, private CartService: CartService, private UserService: UserService) {}

    loadingError$: Promise<boolean> = new Promise(resolve => resolve(false)); 
    product$ =  this.router.params.pipe(
        switchMap((params) => this.ProductsService.GetOne(params['ID'])),
        catchError(err => {
            this.loadingError$ = new Promise(resolve => resolve(true));
            return [];
        }
    ));

    buyProduct(Product: Product) {
        if(!this.UserService.isLogged()) return 
       this.ProductsService.buyProduct(Product).subscribe(
              (res) => {
                    Swal.fire({
                        icon: 'success',
                        title: `Compra do ${res.body?.name} realizada com sucesso!`,
                        text: 'Obrigado por comprar conosco!',
                    })
                }
       )
    }

    addToCart(Product: Product) {
         const productToCard: ProductCart = { 
             ...Product, 
             buyQuantity: 1
         } 
       const notInCart =  this.CartService.addToCart(productToCard);
        if(notInCart) { 
            Swal.fire({
                icon: 'success',
                title: `${Product.name} adicionado ao carrinho!`,
                text: 'Obrigado por comprar conosco!',
            })
        } else { 
            Swal.fire({
                icon: 'warning',
                title: `${Product.name} já está no carrinho!`,
            })
        }
    }	
}