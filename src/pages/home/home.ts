import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
miPelicula = new MovieModel;
constructor() {
                  miPelicula = new miPelicula (
                               {
                                  _titulo: 'Terminator',
                                  _genero: 'Accion',
                                  _frase: 'Im back',
                                  _autor: 'Arnold Schwarzenegger',
                                  _clasificacion: 'Apta para todo publico'
                                }
                                              );
                  miPelicula.url = "assets//imgs//terminator.jpg";
                  miPelicula.sinopsis = "Un asesino del futuro llega para matar a la madre de un lider";
                  miPelicula.puntaje=10;
                  miPelicula.disponible=true;
                }
  ngOnInit() {
  }
}
