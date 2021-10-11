import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesComponent } from './heroes/Heroe/heroes.component';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroesComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    ContadorComponent,
    HeroesComponent,
    ListadoComponent]
})
export class AppModule { }
