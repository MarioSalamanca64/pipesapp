import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimerNgModule } from '../primer-ng/primer-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
//pipe
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipes } from './pipes/vulela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    //components
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    BasicosComponent,
    //pipes
    MayusculasPipe,
    VuelaPipes,
    OrdenarPipe],
  imports: [
    CommonModule,
    PrimerNgModule
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    BasicosComponent
  ]
})
export class VentasModule { }
