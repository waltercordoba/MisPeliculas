import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";
/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  movie: MovieModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.movie = this.navParams.data.movie;
  }
//  action(actionName: string, pelicula: MovieModel)
  action(actionName: string) {
/*   const pos = this.peliculas.indexOf(pelicula);
    var miPeli = this.peliculas.splice(pos, 1); // desde la posicion 1 elemento
*/
    switch (actionName) {
      case 'gusto':
        this.movie.gusto = true;
    /*    miPeli[0].gusto = true;
        this.peliculas.push(miPeli[0]); */
        break;
      case 'noGusto':
        this.movie.gusto = false;
    /*    miPeli[0].gusto = false;
        this.peliculas.push(miPeli[0]); */
        break;
    }
  }

}
