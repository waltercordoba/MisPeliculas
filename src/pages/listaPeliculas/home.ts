import { Component } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
import { MiProveedorProvider } from "../../providers/mi-proveedor/mi-proveedor";
import { NavController } from 'ionic-angular';
import { NavParams } from "ionic-angular";
import { DetallePage } from "../detalle/detalle";
import { PipesModule } from "../../pipes/pipes.module";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class listaPeliculasPage {
peliculas:MovieModel[];
user: string;

constructor(private miPrv: MiProveedorProvider, private navParams: NavParams, private navCtrl: NavController) {}
ionViewWillEnter() {
    this.peliculas = this.miPrv.getMovies(false);
    this.user = this.navParams.data.user;
}
verDetalle(peli: MovieModel) {
  this.navCtrl.push(DetallePage, {peli})
}

}
