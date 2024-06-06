import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  private rutas:Rutas[]=[
    {
      ciuorigen: "Machala" ,
      ciudestino:"Cuenca" ,
      preruta: 8.50,
      descripcion: "De Machala a Cuenca",
      tipo: "Interno"
    },
    {
      ciuorigen: "Loja" ,
      ciudestino:"Cuenca" ,
      preruta: 12.5,
      descripcion: "De Loja a Cuenca",
      tipo: "Externo"
    },
    {
      ciuorigen: "Loja" ,
      ciudestino:"Machala" ,
      preruta: 8.50,
      descripcion: "De Loja a Machala",
      tipo: "Interno"
    },
    {
      ciuorigen: "Machala" ,
      ciudestino:"Loja" ,
      preruta: 12.5,
      descripcion: "De Machala a Loja",
      tipo: "Externo"
    },
    {
      ciuorigen: "Guayaquil" ,
      ciudestino:"Machala" ,
      preruta: 8.50,
      descripcion: "De Guayaquil a Machala",
      tipo: "Externo"
    },
    {
      ciuorigen: "Machala" ,
      ciudestino:"Guayaquil" ,
      preruta: 12.5,
      descripcion: "De Machala a Guayaquil",
      tipo: "Interno"
    },
    {
      ciuorigen: "Quito" ,
      ciudestino:"Machala" ,
      preruta: 8.50,
      descripcion: "De Quito a Machala",
      tipo: "Externo"
    },
    {
      ciuorigen: "Machala" ,
      ciudestino:"Quito" ,
      preruta: 12.5,
      descripcion: "De Machala a Quito",
      tipo: "Interno"
    },
    {
      ciuorigen: "Quito" ,
      ciudestino:"Cuenca" ,
      preruta: 8.50,
      descripcion: "De Quito a Cuenca",
      tipo: "Externo"
    },
    {
      ciuorigen: "Cuenca" ,
      ciudestino:"Quito" ,
      preruta: 8.50,
      descripcion: "De Cuenca a Quito",
      tipo: "Interno"
    },
    {
      ciuorigen: "Machala" ,
      ciudestino:"Pasaje" ,
      preruta: 1.50,
      descripcion: "De Machala a Pasaje",
      tipo: "Interno"
    }
  ];

  getRutas(){
    return this.rutas;
  }
  getRuta(idx: number):Rutas{
    return this.rutas[idx];
  }
  constructor() { 
    console.log("servicio listo para usar...");
  }
  invocador(ruta: string): number{
    let h = -1;
    for (let i = 0; i < this.rutas.length; i++){
      if (this.rutas[i].ciuorigen.toLowerCase() == ruta.toLowerCase()) {
        h = i; 
        break;      
      }
    }
    return h;
  }  

//para obtener rutas
getRutasPorTipo(tipo: string): Rutas[] {
  return this.rutas.filter(ruta => ruta.tipo.toLowerCase() === tipo.toLowerCase());
}






buscarRutas(termino: string): Rutas[] {
  let rutasCoincidentes: Rutas[] = [];
  termino = termino.toLowerCase();
  for (let ruta of this.rutas) {
    let ciudadOrigen = ruta.ciuorigen.toLowerCase();
    let ciudadDestino = ruta.ciudestino.toLowerCase();
    if (ciudadOrigen.indexOf(termino) >= 0 || ciudadDestino.indexOf(termino) >= 0) {
      rutasCoincidentes.push(ruta);
    }
  }
  return rutasCoincidentes;
}




}

  export interface Rutas{
    ciuorigen: string;
    ciudestino: string;
    preruta: number;
    descripcion: string;
    tipo: string;
}
