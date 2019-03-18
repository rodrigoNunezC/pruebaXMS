import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Pais } from '../models/pais.model';
import { Observable } from 'rxjs';

@Injectable()
export class PaisService {

    ApiBaseUrl = 'http://localhost:61790/api/pais/';
  
    constructor(private _http: HttpClient) {
        console.log("iniciando pais directive");
    }

    getAll(): Observable<Pais[]>{
        return this._http.get<Pais[]>(this.ApiBaseUrl + "all");

    }

}
