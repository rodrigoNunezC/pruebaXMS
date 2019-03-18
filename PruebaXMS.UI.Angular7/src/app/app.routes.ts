import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { UsuarioComponent } from './components/administracion/usuario/usuario.component';
import { UsuariosComponent } from './components/administracion/usuario/usuarios.component';

const APP_ROUTES: Routes = [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [UsuariosComponent , UsuarioComponent]

