import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidosComponent } from './components/protegidos/protegidos.component';
import { AuthModule } from '@auth0/auth0-angular';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { BuscarComponent } from './components/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidosComponent,
    RutasComponent,
    RutaComponent,
    QuienessomosComponent,
    BuscarComponent
    
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-jworknacz5c6asoa.us.auth0.com',
      clientId: 'RDgCIXQkDOWq5s0hBAo0JGIcEcz5oGyA',
      authorizationParams: {
        redirect_uri:window.location.origin
      }
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
