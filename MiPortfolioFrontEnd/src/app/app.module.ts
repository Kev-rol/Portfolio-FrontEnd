import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Micomponente } from './components/mi-componente/mi-componente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    Micomponente,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
