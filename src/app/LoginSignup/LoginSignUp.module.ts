import { LoginSignupComponent } from './loginSignup.component';
import { LoginSignUpRoutingModule } from './loginSignup-routing.module'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    imports: [
        CommonModule, 
        LoginSignUpRoutingModule,
        ReactiveFormsModule,
        SweetAlert2Module.forChild()
    ],
    declarations: [
        SignupComponent,
        LoginComponent, 
        LoginSignupComponent
    ],
    providers: [], 
    exports: [],
})
export class LoginSignUp { }