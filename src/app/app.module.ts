import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link3Component } from './link3/link3.component';

import { RouterModule, Routes } from '@angular/router';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { FormularioComponent } from './formulario/formulario.component';


const appRoutes:Routes=[
  {path: 'Formulario', component: Link1Component},
  {path: 'Link2', component: Link2Component},
  {path: 'Link3', component: Link3Component},
  {path: 'BarraNav', component: BarraNavComponent},
  {path: '', component: FormularioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    BarraNavComponent,
    FormularioComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
