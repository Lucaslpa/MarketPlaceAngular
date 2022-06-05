import { ProductsService } from './../../services/products.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { catchError, Subject } from 'rxjs';
import { GoogleTagManagerService } from 'angular-google-tag-manager';


@Component({
    selector: "app-product",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.css"]
})
export class ProductsComponent  {
     products$  = this.ProductsService.Get.pipe(
         catchError(err => {
                this.loadingError$ = new Promise(resolve => resolve(true));
                return [];
            }
       )
     )
     loadingError$: Promise<boolean> = new Promise(resolve => resolve(false));

    constructor(
      private ProductsService: ProductsService,
      private router: Router,
      private GoogleTagManagerService: GoogleTagManagerService
      ) {}

    pushTagSelectedProduct(id: number) {
      const gtmTag = {
        event: 'selectedProduct',
        productID: String(id),
    };
      this.GoogleTagManagerService.pushTag(gtmTag)
    }

    onSelectProduct(product: Product) {
        this.router.navigate(['/Products', product.id])
        this.pushTagSelectedProduct(product.id)
    }
}
