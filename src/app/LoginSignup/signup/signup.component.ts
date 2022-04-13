import { Router } from '@angular/router';
import { UserRegister } from './../../../models/user';
import { UserService } from './../../services/user.service';
import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { catchError } from 'rxjs';


@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.css"]
})
export class SignupComponent {


    returnURL  = this.Router.parseUrl(this.Router.url).queryParams['returnUrl'] || '/'

    registerForm: FormGroup = new FormGroup({});

    constructor(private fb: FormBuilder, private UserService: UserService, private Router: Router) {
        this.registerForm =  this.fb.group({
            name: ["", Validators.required],
            username: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required, Validators.minLength(4)]],
            confirmPassword: ["", [Validators.required, Validators.minLength(4)]],
        });
      }  
    
    signUp(event: MouseEvent) {
        event.preventDefault();
        const formIsInvalid = !this.registerForm.valid
        const passwordAndConfirmPasswordAreDifferent = this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value
        
        if(formIsInvalid
            || 
            passwordAndConfirmPasswordAreDifferent  
            ) {
          Swal.fire({
            icon: 'warning',
            title: 'Formulário inválido',
            text: 'Por favor, preencha todos os campos corretamente.',
         })
        return;
        }
        const newUser: UserRegister = {
            name: this.registerForm.get('name')?.value,
            username: this.registerForm.get('username')?.value,
            email: this.registerForm.get('email')?.value,
            password: this.registerForm.get('password')?.value,
        }
       const sub = this.UserService.register(newUser).pipe(
           catchError( err => {
                Swal.fire({
                     icon: 'error',
                     title: 'Oops...',
                     text: err.message,
                  })
                return err;
           })
       ).subscribe(
            () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro realizado com sucesso!',
                    text: 'Você já pode fazer login!',
                    didClose: () => {
                        this.goToLogin().then(() => { 
                            sub.unsubscribe();
                        })
                    }
                })
                this.registerForm.reset();
            },
        )
    }


    goToLogin() { 
           return  this.Router.navigate(['/Enter','Login'], {
                 queryParams: {
                        returnUrl: this.returnURL
                    }
            });
        } 
}