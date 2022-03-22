import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {

    LoginForm = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) { }

    onLogin() { 
        console.log(this.LoginForm.value);
        
    }

}