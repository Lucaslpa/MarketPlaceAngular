import { PurchaseComponent } from './purchase/purchase.component';
import { ProductComponent } from './showProduct/product.component';
import { ProductsComponent } from './showProducts/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeComponent } from './products.component';
import { CartComponent } from '../cart/cart.component';


const routes: Routes = [
    { path: '',
     component: ProductsHomeComponent, 
     children: [
        { path: 'Products', component: ProductsComponent, pathMatch: 'full' },
        { path: 'Products/:ID', component: ProductComponent},
        { path: '', redirectTo: 'Products', pathMatch: 'full' },
        { path: 'Cart', component: CartComponent },
        {path: 'Purchase', component: PurchaseComponent}
     ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
