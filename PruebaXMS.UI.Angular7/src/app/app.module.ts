import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';
//import { fontawesome } from 'fontawesome';

// Rutas
import { AppRoutingModule, routingComponent } from './app.routes';

//service 
import { UsuarioService } from './services/usuario.service';
import { PaisService } from './services/pais.service';


//Componentes 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { FooterComponent } from './components/menu/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
      HttpClientModule
    
  ],
   providers: [
       UsuarioService,
       PaisService
     
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
