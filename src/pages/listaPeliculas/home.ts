import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";
import { MiProveedorProvider } from "../../providers/mi-proveedor/mi-proveedor";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class listaPeliculasPage {
peliculas:MovieModel[];

constructor(private miPrv: MiProveedorProvider) {}
ngOnInit() {
    this.peliculas = this.miPrv.getMovies(false);
}
  action(actionName: string, pelicula: MovieModel) {
    const pos = this.peliculas.indexOf(pelicula);
    var miPeli = this.peliculas.splice(pos, 1); // desde la posicion 1 elemento
    switch (actionName) {
      case 'gusto':
        miPeli[0].gusto = true;
        this.peliculas.push(miPeli[0]);
        break;
      case 'noGusto':
        miPeli[0].gusto = false;
        this.peliculas.push(miPeli[0]);
        break;

    }
  }
}
