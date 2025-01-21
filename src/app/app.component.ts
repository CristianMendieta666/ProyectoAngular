import { Component } from '@angular/core';
import { Datos } from './datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
