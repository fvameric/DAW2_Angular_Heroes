import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesComponent } from './heroes/Heroe/heroes.component';
import { ListadoComponent } from './heroes/listado/listado.component';

//import module
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroesComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [
    ContadorComponent,
    HeroesComponent,
    ListadoComponent,
    MainPageComponent]
})
export class AppModule { }
