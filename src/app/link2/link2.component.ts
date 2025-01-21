import { Component } from '@angular/core';
import { Datos } from '../datos';

@Component({
  selector: 'app-link2',
  templateUrl: './link2.component.html',
  styleUrls: ['./link2.component.css']
})
export class Link2Component {

   datos:Datos[]=[
  
   ]
    cuadroNombre:string="";
    cuadroTelefono:number=0;
    cuadroDireccion:string="";
    cuadroCorreo: string="";
  
  }

