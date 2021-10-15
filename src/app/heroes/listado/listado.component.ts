import { Component, OnInit } from '@angular/core';

import { Heroe } from 'src/app/heroes/Heroe';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  heroes: Heroe[] = [
    { id: 10, nombre: 'Spiderman', edad: 20 },
    { id: 40, nombre: 'batman', edad: 45 },
    { id: 21, nombre: 'capitan America', edad: 140 },
    { id: 3, nombre: 'iron Man', edad: 56 },
    { id: 89, nombre: 'hulk', edad: 50 }
  ];

  heroeEliminado: Heroe = {
    id: 0, nombre: '', edad: 0
  };
  heroeDetalle: Heroe = {
    id: 0, nombre: '', edad: 0
  };

  seleccionado: boolean = false;
  indice: number = 0;

  constructor(
  ) { }


  ngOnInit(): void {
  }

  eliminarHeroe(i:number) {
    this.indice = -1;
    this.heroeEliminado = this.heroes[i];
    this.heroes.splice(i,1);
  }

  /*
  modificarHeroe(i:number) {
    this.heroes[indice].nombre = "LEMAO";
  }
  */

  verDetallesHeroe(i:number) {
    this.indice = i;
    this.seleccionado = true;
    this.heroeDetalle = this.heroes[i];
  }

}
