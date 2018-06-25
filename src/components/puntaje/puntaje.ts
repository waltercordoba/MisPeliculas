import { Component } from '@angular/core';


@Component({
  selector: 'puntaje',
  templateUrl: 'puntaje.html'
})
export class puntajeComponent {

  text: string;

  constructor() {
    console.log('Hello puntajeComponent Component');
    this.text = 'Hello World';
  }

}
