import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']

})

export class UsuariosComponent implements OnInit {

    users: User[] = [];

    constructor(private _usuarioService: UsuarioService, private router: Router) {
    }


    nuevo(): void {
        this.router.navigate(['/usuario']);
    }

    rowSelected(usuario: {}): void {

    }

    ngOnInit() {
       
         return this._usuarioService.getAll()
             .subscribe(data => {
                 this.users = data;
               
             },
                 error => alert(error + ' Error Get')
             );       
    }

}