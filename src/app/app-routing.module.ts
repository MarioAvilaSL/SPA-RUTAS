import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidosComponent } from './components/protegidos/protegidos.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { RutasComponent } from './components/rutas/rutas.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { BuscarComponent } from './components/buscar/buscar.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'precios', component:PreciosComponent},
  {path: 'rutas', component: RutasComponent},
  {path: 'ruta/:id', component:RutaComponent},
  {path: 'quienessomos', component:QuienessomosComponent},
  {path: 'buscar', component:BuscarComponent, canActivate: [AuthGuard]},
   //servicio buscar
   {path: 'buscar/:palabra', component: BuscarComponent},

  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
