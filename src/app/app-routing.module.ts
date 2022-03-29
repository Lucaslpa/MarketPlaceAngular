import { CartComponent } from './cart/cart.component';
import { ProductsHomeComponent } from './Products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './navegacao/template.component';
import { ProductComponent } from './Products/showProduct/product.component';
import { ProductsComponent } from './Products/showProducts/products.component';

const routes: Routes = [
    {
      path: 'Enter',
      loadChildren: () => import('./LoginSignup/LoginSignUp.module').then(m => m.LoginSignUp)
    }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
