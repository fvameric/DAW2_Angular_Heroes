import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AgregarComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})

export class DbzModule { }
