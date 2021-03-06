import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { catchError } from 'rxjs';


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent  {
     returnURL  = this.Router.parseUrl(this.Router.url).queryParams['returnUrl'] || '/'
  
     LoginForm = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private UserService: UserService, private Router: Router) { }

  

    onLogin(event: MouseEvent) { 
        event.preventDefault();
      
       const formIsInvalid = !this.LoginForm.valid
      if(formIsInvalid) {
        Swal.fire({
            icon: 'warning',
            title: 'Formulário inválido',
            text: 'Por favor, preencha todos os campos corretamente.',
         })
        return;
        }
       const sub =  this.UserService.login(
            this.LoginForm.get('login')?.value, 
            this.LoginForm.get('password')?.value
            ).pipe(catchError( err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Erro na conexão com o servidor',
               })
                return err;
            } )).subscribe(allowedLogin => {
           if(allowedLogin) { 
            this.Router.navigate([this.returnURL]).then( () => {
                    sub.unsubscribe();
                });
           } else {
                Swal.fire({
                     icon: 'error',
                     title: 'Oops...',
                     text: 'Login ou senha incorretos!',
                })
              }
          }, 
        )
    }

    goToRegister() { 
        this.Router.navigate(['/Enter','Signup'], {
             queryParams: {
                    returnUrl: this.returnURL
                }
        });
    }
}