import { Product } from './../../../models/product';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-selectProduct",
    templateUrl: "./selectProduct.component.html",
    styleUrls: ["./selectProduct.component.css"]
})
export class SelectProductComponent { 
     @Input() product: Product;
     @Output() productSelected = new EventEmitter<Product>();

        onSelectProduct() {
            this.productSelected.emit(this.product);
        }
}