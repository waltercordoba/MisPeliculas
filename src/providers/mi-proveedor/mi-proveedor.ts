import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from "../../models/movie.model";

/*
  Generated class for the MiProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MiProveedorProvider {
  peliculas:MovieModel[];

  constructor() {
    this.peliculas= [];
    const p1 = new MovieModel ('Terminator Genesis', 'Accion', 'Im back', 'Arnold Swartzeneger', 'Prohibida para menores 16');
    p1.url = "assets//imgs//terminatorg.jpg";
    p1.sinopsis = "Un asesino regresa del futuro para matar a la madre de un lider";
    p1.puntaje=10;
    p1.disponible=true;
    this.peliculas.push(p1);
    //
    const p2 = new MovieModel ('La era de Hielo', 'Comedia animada', 'No me agrada este gato, creo que es adivino!', 'Ray Romano', 'Apta para todo publico');
    p2.url = "assets//imgs//erahielo.jpg";
    p2.sinopsis = "Un mamut gruñón y sus amigos prehistóricos entran en acción para ayudar a un niño perdido a regresar a su clan.";
    p2.puntaje=7;
    p2.disponible=false;
    this.peliculas.push(p2);
    //
    const p3 = new MovieModel ('Rapido y Furioso 7', 'Accion', 'Cuando te juegas la vida, es cuando mas dependes de ti mismo', 'Brian OConner', 'Prohibida para menores 18');
    p3.url = "assets//imgs//fyf7.jpg";
    p3.sinopsis = "El hermano de un hombre muerto busca vengarse de la pandilla de Toretto.";
    p3.puntaje=6;
    p3.disponible=true;
    this.peliculas.push(p3);
  }
  getMovies(recomendadas:boolean): MovieModel[] {
    if (recomendadas ===true) {
        return this.peliculas.filter(peli => peli.gusto != undefined);}
    else {
      return this.peliculas;
    }
  }

  getMoviesVistas(): MovieModel[] {
     return this.peliculas.filter(peli => peli.gusto != undefined);
  }
}
