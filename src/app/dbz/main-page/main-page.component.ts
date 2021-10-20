import { Component, OnInit } from '@angular/core';

//import
import { Personaje } from './Personaje';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // array personajes
  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 9000 },
    { nombre: 'Vegeta', poder: 450 }
  ];
  
  // variables de [(ngModel)]
  // estas variables van en "dos direcciones"
  // puedes obtener el valor de lo especificado en component.html
  // y a su vez, también se mostrará por pantalla lo que se ponga aquí
  nombrePjNuevo = "Nuevo personaje";
  poderPjNuevo = 0;

  constructor() { }

  ngOnInit(): void {
  }

  submit(formulario: NgForm) {
    
    // otra forma de obtener los valores del formulario
    // pero en este ejercicio utilizaré las variables NgModel
    //this.personajeNuevo.nombre = formulario.value.nombre;
    //this.personajeNuevo.poder = formulario.value.poder;

    const personajeNuevo: Personaje = {
      nombre: '', poder: 0
    };

    // variables NgModel y push para meterlo en la array
    personajeNuevo.nombre = this.nombrePjNuevo;
    personajeNuevo.poder = this.poderPjNuevo;
    this.personajes.push(personajeNuevo);
  }
}
