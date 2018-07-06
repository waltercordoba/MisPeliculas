import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";
import { MiProveedorProvider } from "../../providers/mi-proveedor/mi-proveedor";

/**
 * Generated class for the RecomiendoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recomiendo',
  templateUrl: 'recomiendo.html',
})
export class RecomiendoPage {
  peliculas:MovieModel[];

  constructor(private miPrv: MiProveedorProvider) {}
  ngOnInit() {
      this.peliculas = this.miPrv.getMovies(true);
  }

}
