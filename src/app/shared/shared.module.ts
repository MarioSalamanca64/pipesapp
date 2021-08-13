import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimerNgModule } from '../primer-ng/primer-ng.module';

import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [MenuComponent],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimerNgModule
  ]
})
export class SharedModule { }
