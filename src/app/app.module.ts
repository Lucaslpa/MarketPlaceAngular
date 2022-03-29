import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './navegacao/template.module';
import { ProductsModule } from './Products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ProductsModule, 
    HttpClientModule
  ],
  providers: [
    ProductsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
