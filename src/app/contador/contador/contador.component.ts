import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  title = 'Contador app';
  contador: number = 0;
  base: number = 0;

  ngOnInit():void {
    this.base = this.buscarNumRandom();
  }

  calcular(numero: number) {
    this.contador += numero;
  }

  buscarNumRandom(): number {
    return Math.floor((Math.random() * 10) + 1);
  }
}
