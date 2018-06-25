import { Component } from '@angular/core';


@Component({
  selector: 'clasifica',
  templateUrl: 'clasifica.html'
})
export class clasificaComponent {

  text: string;

  constructor() {
    console.log('Hello MovieInfoComponent Component');
    this.text = 'Hello World';
  }

}
