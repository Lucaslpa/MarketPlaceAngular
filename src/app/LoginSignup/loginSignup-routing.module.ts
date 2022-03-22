import { LoginSignupComponent } from './loginSignup.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: LoginSignupComponent, 
     children: [
    { path: '',redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent},
    { path: 'Signup', component: SignupComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSignUpRoutingModule { }
