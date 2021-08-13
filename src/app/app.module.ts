import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*para resolber el problema de animaciones*/ 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar de idioma o cambiar el locale de la app
import localeEsMx from '@angular/common/locales/es-MX';
import localeEsFr from '@angular/common/locales/fr';
//llamar ala funcion
import{ registerLocaleData } from '@angular/common';
//llamar al localeesmx
registerLocaleData(localeEsMx);
registerLocaleData(localeEsFr);
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  // semanda a qui el cambio de idioma global
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
