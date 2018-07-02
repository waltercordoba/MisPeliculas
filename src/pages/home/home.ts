import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
movies:MovieModel[];
constructor() {

                }
  ngOnInit() {
    this.movies= [];
    const p1 = new MovieModel ('Terminator II', 'Accion', 'El volvio', 'Arnold Schwarzenegger', 'Prohibida para menores 16');
    p1.url = "assets//imgs//terminator.jpg";
    p1.sinopsis = "Otro asesino regresa";
    p1.puntaje=9;
    p1.disponible=true;
    this.movies.push(p1);
    //
    const p2 = new MovieModel ('Terminator 3', 'Suspenso', 'Se pelea en el futuro', 'Arnold Schwarzenegger', 'Prohibida para menores 16');
    p2.url = "assets//imgs//terminator.jpg";
    p2.sinopsis = "Otro asesino regresa";
    p2.puntaje=7;
    p2.disponible=false;
    this.movies.push(p2);
    //
    const p3 = new MovieModel ('Scary Movie 3', 'Suspenso', 'Un asesino silencioso', 'Desconocido', 'Prohibida para menores 18');
    p3.url = "assets//imgs//terminator.jpg";
    p3.sinopsis = "Un asesino toma venganza";
    p3.puntaje=6;
    p3.disponible=true;
    this.movies.push(p3);
    //
  }
  action(actionName: string, pelicula: MovieModel) {
  switch (actionName) {
    case 'gusto':
      console.log('Te gusto ${pelicula.titulo}');
      break;
    case 'noGusto':
      console.log('No gusto ${pelicula.titulo}');
      break;
    default:
      console.error('Error');
  }
}
}
