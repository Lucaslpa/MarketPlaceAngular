import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from "@angular/core";
import { catchError, switchMap, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent  { 
    
    
    constructor(private ProductsService: ProductsService, private router: ActivatedRoute) {}
    loadingError$: Promise<boolean> = new Promise(resolve => resolve(false)); 
    product$ =  this.router.params.pipe(
        switchMap((params) => this.ProductsService.GetOne(params['ID'])),
        catchError(err => {
            this.loadingError$ = new Promise(resolve => resolve(true));
            return [];
        }
    ));

    buyProduct(Product: Product) {
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
}