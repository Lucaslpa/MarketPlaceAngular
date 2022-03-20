import { ProductsService } from './../../services/products.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector: "app-product",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit { 
     products: Product[] = []

    constructor(private ProductsService: ProductsService, private router: Router ) {}

    onSelectProduct(product: Product) {
        this.router.navigate(['/Product', product.id])
    }
    ngOnInit(): void {
        this.ProductsService.Get
        .subscribe(products => {
            console.log(products)
            this.products = products;
        })
    }
}