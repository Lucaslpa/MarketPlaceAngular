import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit { 
    productMock: Product = {
       id: 1, 
       description: 'Product 1',
       img: 'https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s20-fe-128gb-cloud-navy-4g-6gb-ram-tela-65-cam-tripla-selfie-32mp/magazineluiza/155629800/0007bbdc665749ec107d860c3a4b8b2f.jpg',
       name: 'Samsung Galaxy S20',
       price: 2999
    }
    product: Product = this.productMock
    constructor(private ProductsService: ProductsService, private router: ActivatedRoute) {}

    ngOnInit(): void {
        this.router.params.subscribe(params => {
            this.ProductsService.GetOne(Number(params['ID']))
            .subscribe(product => {
                this.product = product;
            })
        })
    }
}