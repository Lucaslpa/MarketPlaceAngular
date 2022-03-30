import { CartComponent } from './../cart/cart.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TemplateModule } from "../navegacao/template.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsHomeComponent } from "./products.component";
import { SelectProductComponent } from "./selectProduct/selectProduct.component";
import {ProductComponent} from './showProduct/product.component'
import { ProductsComponent } from "./showProducts/products.component";
import { CartService } from '../services/cart.service';


@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        TemplateModule
    ],
    exports: [
        ProductComponent, 
        ProductsComponent,
        ProductsHomeComponent
    ],
    declarations: [
        ProductComponent, 
        ProductsComponent,
        SelectProductComponent, 
        ProductsHomeComponent,
        CartComponent
    ],
    providers: [
        CartService
    ],
})
export class ProductsModule { }