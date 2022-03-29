import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, tap, catchError } from 'rxjs';
import {map, switchMap } from 'rxjs/operators'
import { User, UserRegister } from 'src/models/user';


const API_URL = 'http://localhost:3000/user';
@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private Http: HttpClient) {}  

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