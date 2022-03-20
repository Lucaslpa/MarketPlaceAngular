import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { SelectProductComponent } from "./selectProduct/selectProduct.component";
import {ProductComponent} from './showProduct/product.component'
import { ProductsComponent } from "./showProducts/products.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ProductComponent, 
        ProductsComponent
    ],
    declarations: [
        ProductComponent, 
        ProductsComponent,
        SelectProductComponent
    ],
    providers: [],
})
export class ProductsModule { }