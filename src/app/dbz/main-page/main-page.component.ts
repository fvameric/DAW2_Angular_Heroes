import { Component, OnInit } from '@angular/core';

//import
import { Personaje } from '../../interfaces/Personaje';

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

  constructor() { }

  ngOnInit(): void {
  }

  agregarPersonaje(data: Personaje) {
    this.personajes.push(data);
  }
}
