import { ProductComponent } from './showProduct/product.component';
import { ProductsComponent } from './showProducts/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeComponent } from './products.component';


const routes: Routes = [
    { path: 'Products',
     component: ProductsHomeComponent, 
     children: [
        { path: '', component: ProductsComponent, pathMatch: 'full' },
        { path: ':ID', component: ProductComponent}
     ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
