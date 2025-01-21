import { Component } from '@angular/core';
import { Datos } from '../datos';

@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.css']
})
export class Link1Component {

titulo = 'Formulario';

  datos:Datos[]=[

  ];

  agregarDatos(){
    let miDato=new Datos(this.cuadroNombre, this.cuadroTelefono, this.cuadroDireccion, this.cuadroCorreo)
    this.datos.push(miDato);
  }

  cuadroNombre:string="";
  cuadroTelefono:number=0;
  cuadroDireccion:string="";
  cuadroCorreo: string="";

}


