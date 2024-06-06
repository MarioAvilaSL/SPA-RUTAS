import { Component } from '@angular/core';
import { Rutas, RutasService } from '../../services/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {
  rutas: Rutas[]=[];
  ngOnInit(): void {
   this.rutas = this._rutasService.getRutas();
   console.log(this.rutas);
  }
  constructor(private _rutasService:RutasService,private router:Router){

  }
  VerRuta(idx: number){
    console.log(idx);
    this.router.navigate(['/ruta',idx]);
  }

  FiltroT(){
    this.rutas = this._rutasService.getRutas();
  }

  FiltroI() {
    const rutasInternas = this._rutasService.getRutasPorTipo('Interno');
    if (rutasInternas.length > 0) {
      this.rutas = rutasInternas;
    } else {
      console.log('No hay elementos con tipo Interno');
      this.rutas = [];
    }
  }
  
  FiltroE() {
    const rutasExternas = this._rutasService.getRutasPorTipo('Externo');
    if (rutasExternas.length > 0) {
      this.rutas = rutasExternas;
    } else {
      console.log('No hay elementos con tipo Externo');
      this.rutas = [];
    }
  }


  

}
