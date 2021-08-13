import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

 enMayusculas: boolean = true;
  // ordenarpor biene del pipe echo por noostros que se ordene cuando nosotros tocamos un boton y esta en el html tanbien 
 ordenarPor:string= '';

 heroes: Heroe[] = [
   {
     nombre: 'Superman',
     vuela: true ,
     color: Color.azul
   },
   {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: true,
    color: Color.verde
  },
  {
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Linterna Verde',
    vuela: true,
    color: Color.verde
  }
 ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrden( valor:string){
    this.ordenarPor = valor;
  }

}
