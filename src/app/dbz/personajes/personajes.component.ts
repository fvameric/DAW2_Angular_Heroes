import { Component, Input, OnInit } from '@angular/core';

//import
import { Personaje } from '../../interfaces/Personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() personajesCompPersonajes: Personaje[] = [];
}
