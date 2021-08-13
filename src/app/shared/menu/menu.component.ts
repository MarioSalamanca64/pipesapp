import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    /*este es el menus que sebe lables es el nombre icon = icono
    reuterlinck es el nombre que esta en el enrutado*/ 
      this.items = [
        {
            label: 'pipes Angular',
            icon: 'pi pi-desktop',
            items:[
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                routerLink: 'numeros'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'no-comunes'
              }] 
        },
        {
          label:'Pipes personalizados',
          icon:'pi pi-cog',
          routerLink: 'ordenar'
          
        }
       
];
  }

}
