import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { PaisService } from '../../../services/pais.service';
import { User } from '../../../models/user.model';
import { Pais } from '../../../models/pais.model';


@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html'

})

export class UsuarioComponent implements OnInit {

    user: User = new User();
    paises: Pais[] = [];
    Pais: any;

    constructor(private _usuarioService: UsuarioService, private _paisService: PaisService, private router: Router) {
         
    }

    ngOnInit() {
        return this._paisService.getAll()
            .subscribe(data => {
                this.paises = data;
                console.log(this.paises);
            },
                error => alert(error + ' Error Get')
            );       
    }

    showMainParent(): void {
        this.router.navigate(['/usuarios']);
    }

    upser(): void {
        
        this.user.Pais = JSON.parse(this.Pais);
        this._usuarioService.create(this.user).subscribe(
            (data: User) => {
                console.log(data);
              
            },

            (error: any) => console.log("error")
        );
    }
}