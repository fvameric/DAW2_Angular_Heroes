import { Component, OnInit } from '@angular/core';

//import
import { Personaje } from './Personaje';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // array heroes
  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 9000 },
    { nombre: 'Vegeta', poder: 450 }
  ];
  personajeNuevo: Personaje = {
    nombre: '', poder: 0
  };

  nombrePjNuevo = "Nuevo personaje";
  poderPjNuevo = 0;

  constructor() { }

  ngOnInit(): void {
  }

  submit(formulario: NgForm) {
    
    //this.personajeNuevo.nombre = formulario.value.nombre;
    //this.personajeNuevo.poder = formulario.value.poder;

    this.personajeNuevo.nombre = this.nombrePjNuevo;
    this.personajeNuevo.poder = this.poderPjNuevo;
    this.personajes.push(this.personajeNuevo);
  }

}
