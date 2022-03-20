import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './navegacao/template.component';
import { ProductComponent } from './Products/showProduct/product.component';
import { ProductsComponent } from './Products/showProducts/products.component';

const routes: Routes = [
    { path: '', redirectTo: 'Products', pathMatch: 'full' },
    { path: 'Products', component: ProductsComponent },
    { path: 'Product/:ID', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
