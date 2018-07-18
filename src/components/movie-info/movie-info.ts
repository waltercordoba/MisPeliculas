import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
import { PipesModule } from "../../pipes/pipes.module";

import * as moment from 'moment';

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
 duro: moment.Moment;
 hrsd: number;
 mind: number;
 constructor() {
 }
 ngOnInit() {
   //this.duro = moment.duration(this.pelicula.minduracion, 'mm').hours();
   this.hrsd = 0;
   this.mind = 45;
 }
 meGustoPeli() {
  this.movieAction.emit('gusto');
 }
 noGustoPeli() {
  this.movieAction.emit('noGusto');
 }
 favorita() {
    this.movieAction.emit('favorita');
 }
}
