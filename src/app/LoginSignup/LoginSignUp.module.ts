import { LoginSignupComponent } from './loginSignup.component';
import { LoginSignUpRoutingModule } from './loginSignup-routing.module'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, 
        LoginSignUpRoutingModule,
        ReactiveFormsModule
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