import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
/**
 * Generated class for the MovieInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'minilist',
  templateUrl: 'minilist.html'
})
export class MinilistComponent {
 @Input() pelicula: MovieModel;
 @Output() movieAction: EventEmitter<string> = new EventEmitter<string>();;
 text: string;

  constructor() {}

}
