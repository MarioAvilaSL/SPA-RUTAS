import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  termino!: string;
  rutas:any[]=[]



  constructor(private activatedRoute:ActivatedRoute,
  private _rutaService:RutasService, private router:Router ){}

  buscarRuta( termino:string){
   this.router.navigate(['/buscar', termino]);
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['palabra'];
      this.rutas = this._rutaService.buscarRutas(params['palabra']);
      console.log(this.rutas);
    });


}}
