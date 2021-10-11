import { Component, OnInit } from '@angular/core';

import { Heroe } from 'src/app/heroes/Heroe';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [
    { nombre: 'Spiderman', edad: 20 },
    { nombre: 'batman', edad: 45 },
    { nombre: 'capitan America', edad: 140 },
    { nombre: 'iron Man', edad: 56 },
    { nombre: 'hulk', edad: 50 }
  ]

  indice: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  eliminarHeroe(indice:number) {
    delete this.heroes[indice];
  }

}
