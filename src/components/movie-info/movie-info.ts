import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
/**
 * Generated class for the MovieInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-info',
  templateUrl: 'movie-info.html'
})
export class MovieInfoComponent {
 @Input() pelicula: MovieModel;
 @Output() movieAction: EventEmitter<string> = new EventEmitter<string>();;
  text: string;

  constructor() {
    console.log('Hello MovieInfoComponent Component');
    this.text = 'Hello World';
  }
  meGustoPeli() {
  this.movieAction.emit('gusto');
}

noGustoPeli() {
  this.movieAction.emit('noGusto');
}
}
