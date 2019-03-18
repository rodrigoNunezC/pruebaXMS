import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
//import { Pais } from '../models/pais.model';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable()
export class UsuarioService {

    ApiBaseUrl = 'http://localhost:61790/api/usuario/';
  
    constructor(private _http: HttpClient) {
        console.log("iniciando");
    }

    getAll(): Observable<User[]>{
        return this._http.get<User[]>(this.ApiBaseUrl + "all");

    }

    create(usuario: User): Observable<User> {
       return this._http.post<User>(this.ApiBaseUrl + "create", usuario, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
       
    }

}
