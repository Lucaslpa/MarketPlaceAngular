import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, tap, catchError } from 'rxjs';
import {map, switchMap } from 'rxjs/operators'
import { User, UserRegister } from 'src/models/user';
import Swal from 'sweetalert2';


const API_URL = 'https://my-json-server.typicode.com/Lucaslpa/marketPlaceFakeServer/user';
@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private Http: HttpClient, private Router: Router) {}

    isLogged () {
        const user = localStorage.getItem('user')
        if(!user)  {
            Swal.fire({
                icon: 'warning',
                title: 'Você precisa estar logado para comprar!',
                text: 'Deseja fazer login?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, quero fazer login!',
                cancelButtonText: 'Não desejo fazer login'
            }).then(response => {
                if(response.isConfirmed) this.Router.navigate(['/Enter', 'Login'], {queryParams: {returnUrl: this.Router.url}});
            })
            return false
        }
        return true
    }

    register(newUser: UserRegister): Observable<User | string> {
        return this.Http.get<User[]>(API_URL).pipe(
            catchError( err => {
                throw new Error('Algo de errado aconteceu ao tentar conectar com o servidor');
            }),
            map(users => {
                const user = users.find(user => user.username === newUser.username);
                if (user) {
                    throw new Error(`Usuário com nome ${newUser.username} já existe`);
                }
                return users;
            }
            ),
            switchMap(users => {
                return this.Http.post<User>(API_URL, newUser)
                    }
            )
        );
    }

    login(name: string, password: string) {
        return this.Http.get<User[]>(API_URL).pipe(
            map(users => {
                return users.filter(user => user.username === name && user.password === password)
            }),
            switchMap(users =>
                new Observable<Boolean>(observer => {
                    console.log(users)
                    if(users.length === 1) {
                        localStorage.setItem('user', JSON.stringify({name: users[0].name, id: users[0].id}));
                        observer.next(true);
                    } else {
                        observer.next(false);
                    }
                 }
             )
          )
        );
    }
}
