import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'mario';
  nombreUpper: string = 'MARIO';
  nombrecompleto: string = 'MaRiO SaLamANca';

  fecha:Date = new Date();
}
