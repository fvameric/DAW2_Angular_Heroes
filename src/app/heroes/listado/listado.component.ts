import { Component, OnInit } from '@angular/core';

// import necesario de la interface Heroe al estar en otro archivo
import { Heroe } from 'src/app/heroes/Heroe';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  // array heroes
  heroes: Heroe[] = [
    { nombre: 'Spiderman', edad: 20 },
    { nombre: 'batman', edad: 45 },
    { nombre: 'capitan America', edad: 140 },
    { nombre: 'iron Man', edad: 56 },
    { nombre: 'hulk', edad: 50 }
  ];

  // distintos heroes dependiendo de si se quiere eliminar, ver detalle o modificar
  // he tenido dudas respecto a si es mejor utilizar un solo dummy,
  // pero he preferido separarlos para que no hayan solapamientos raros
  heroeEliminado: Heroe = {
    nombre: '', edad: 0
  };
  heroeDetalle: Heroe = {
    nombre: '', edad: 0
  };
  heroeModificado: Heroe = {
    nombre: '', edad: 0
  };

  // estos flags están sobretodo para que se muestren o no detalles del html con las directivas *ngIf
  eliminado: boolean = false;
  selecVerDetalles: boolean = false;
  selecModificado: boolean = false;

  str1: string = "";
  str2: string = "";
  // el primer índice lo utilizo para saber cual se selecciona para ver detalles o para eliminar
  // 'indiceModificado' lo utilizo tan solo como flag, para saber si el botón que pulso es el mismo que el que estoy viendo en
  // la ventanita de modificar, en caso de ser el mismo botón, pues se ocultará, si es un índice distinto
  // entonces es que estoy pulsando el botón modificar de otro héroe distinto
  // así, en vez de tener que cerrar y volver a abrir, le digo que no se cierre y que ponga directamente la info del otro héroe
  indice: number = 0;
  indiceModificado: number = 0;

  constructor(
  ) { }
  
  ngOnInit(): void {
    for (var i = 0; i<this.heroes.length; i++) {
      this.heroes[i] = this.capitalize(i);
    }
  }

  // click de eliminar
  // indice a -1 porque si fuera 0 me borraría directamente el primer elemento
  // primero probé con "delete this.heroes[i];" en vez de "splice"
  // pero parece que con delete te deja un undefined, no se borra realmente el elemento
  eliminarHeroe(i:number) {
    this.indice = -1;
    this.eliminado = true;
    this.heroeEliminado = this.heroes[i];
    this.heroes.splice(i,1);
  }

  // click para ver un poco más de información del héroe
  // le paso el índice para saber cual héroe clico, selecVerDetalles para utilizarlo en ngIf y que se muestre
  verDetallesHeroe(i:number) {
    this.indice = i;
    this.selecVerDetalles = true;
    this.heroeDetalle = this.capitalize(i);
  }

  // click para modificar
  // pongo eliminado en false para que no tenga conflictos con el botón de eliminar
  // guardo el héroe
  modificarHeroe(i:number) {
    this.eliminado = false;
    this.heroeModificado = this.heroes[i];

    // para abrir y cerrar el div con el mismo botón
    if (this.selecModificado) {
      if (this.indiceModificado == i) {
        this.selecModificado = false;
      }
    } else {
      this.selecModificado = true;
    }

    this.indiceModificado = i;
  }
  
  // botón para aceptar las modificaciones
  submit(nuevoNombre:string, nuevaEdad:string) {
    this.heroes[this.indiceModificado].nombre = nuevoNombre;
    this.heroes[this.indiceModificado].edad = parseInt(nuevaEdad);
  }

  capitalize(i: number): Heroe {
    this.str1 = this.heroes[i].nombre.slice(1);
    this.str2 = this.heroes[i].nombre.charAt(0).toUpperCase();
    this.heroes[i].nombre = this.str2 + this.str1;
    return this.heroes[i];
  }
}
