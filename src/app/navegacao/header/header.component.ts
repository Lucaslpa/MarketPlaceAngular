import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ProductCart } from './../../../models/product';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { CartStore } from "src/store/cart.store";



@Component({
    selector: "app-header",
    templateUrl: "./header.component.html", 
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {

    constructor(  private CartStore: CartStore, private Router: Router ) {}
    currentRouterUrl = this.Router.url || ''
    userName = ''
    cartQuantity = 0; 
    sub: Subscription; 

    
    ngOnInit(): void {
        this.getCartQuantity()
        this.getUserName()
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }
    
    getUserName() {
        const userName = localStorage.getItem('user')
        console.log(userName)
        if(userName) {
        this.userName = JSON.parse(userName).name
     }
    }

    getCartQuantity() {
        this.sub = this.CartStore.getCart().pipe(map(products => products.length)).subscribe(
            (quantity: number) => {
                console.log(quantity)
                this.cartQuantity = quantity || 0;
            }
        )
    }
    
    goToEnter() {  
        this.Router.navigate(['/Enter', 'Login'], {queryParams: {returnUrl: this.Router.url}});
    }

    logout = () => {
        localStorage.removeItem('user')
        this.userName = ''
    }
}