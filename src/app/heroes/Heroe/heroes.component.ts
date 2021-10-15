import { Component, OnInit } from '@angular/core';

import { Heroe } from 'src/app/heroes/Heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  heroes: Heroe[] = [
    { id: 10, nombre: 'Spiderman', edad: 20 },
    { id: 40, nombre: 'batman', edad: 45 },
    { id: 21, nombre: 'capitan America', edad: 140 },
    { id: 3, nombre: 'iron Man', edad: 56 },
    { id: 89, nombre: 'hulk', edad: 50 }
  ];

  constructor() { }

  id: number = 0;
  name: string = '';
  years: number = 0;
  numRandom: number = 0;

  ngOnInit(): void {
    this.cambiarHeroe();
  }

  cambiarHeroe() {
    this.id = this.heroes[this.buscarNumRandom()].id;
    this.name = this.ponerMayuscula(this.heroes[this.buscarNumRandom()].nombre);
    this.years = this.heroes[this.buscarNumRandom()].edad;
  }

  cambiarNombre() {
    this.name = this.ponerMayuscula(this.heroes[this.buscarNumRandom()].nombre);
  }

  cambiarEdad() {
    this.years = this.heroes[this.buscarNumRandom()].edad;
  }

  buscarNumRandom(): number {
    return Math.floor(Math.random() * this.heroes.length);
  }

  ponerMayuscula(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
