import { Component, Input, OnInit, Output } from '@angular/core';

//imports
import { Personaje } from '../../interfaces/Personaje';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() personajesCompAgregar: Personaje[] = [];

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  // variables de [(ngModel)]
  // estas variables van en "dos direcciones"
  // puedes obtener el valor de lo especificado en component.html
  // y a su vez, también se mostrará por pantalla lo que se ponga aquí
  nombrePjNuevo = "Nuevo personaje";
  poderPjNuevo = 0;

  submit(formulario: NgForm) {
    const personajeNuevo: Personaje = {
      nombre: '', poder: 0
    };
    
    // variables NgModel y push para meterlo en la array
    personajeNuevo.nombre = this.nombrePjNuevo;
    personajeNuevo.poder = this.poderPjNuevo;
    this.onNuevoPersonaje.emit(personajeNuevo);
  }
}
