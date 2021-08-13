import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
    nombre:string = 'Mario';
    genero:string = 'masculino';

    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino' : 'invitarla'
    }
    //i18nPrural
    clientes:string [] = ['Maria','pedro','hernando','eduardo','fernando','juan'];
    clientesMapa={
      '=0':'no tenemos ningun cliente eseprando.',
      '=1':'tenemos un cliente eseperando',
      '=2': 'tenemos 2 clientes esperando',
      'other': 'tenemos # clientes esperando.'
    }

    cambiarCliente():void{
      this.nombre = 'Fernanda';
      this.genero = 'femenino';
    }
    /*
    clienteBorrado:string = '';
    /*shift elimina un lemento de una matris*/
    /*borrarCliente(){
      this.clienteBorrado = this.clientes.shift() || '';
    }*/
    borraCliente(){
      this.clientes.pop();
    }

    //KeyValue Pipe
    persona = {
      nombre:'mario',
      edad:34,
      direccion:'mexico',
    }
    //JsonPipe
    heroes = [
      {
        nombre:'superman',
        vuela:true
      },
      {
        nombre:'robin',
        vuela:false
      },
      {
        nombre:'Aquaman',
        vuela:false
      }

    ]

    // Async Pipe
    miObservable = interval(5000);

    valorPromesa = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve('Tenemos data de promesa')
      },3500);
    });



}
