import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from "@angular/core";
import { catchError, switchMap, tap } from 'rxjs';

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent  { 
    
    
    constructor(private ProductsService: ProductsService, private router: ActivatedRoute) {}
    loadingError$: Promise<boolean> = new Promise(resolve => resolve(false)); 
    product$ =  this.router.params.pipe(
        tap( (res) => console.log('inicio fluxo', res) ), 
        switchMap((params) => this.ProductsService.GetOne(params['ID'])),
        tap( (res) => console.log('fim fluxo',res) ), 
        catchError(err => {
            this.loadingError$ = new Promise(resolve => resolve(true));
            return [];
        }
    ));
}