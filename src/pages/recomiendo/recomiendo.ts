import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";

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
misFavoritas:MovieModel[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.misFavoritas= [];
    const p1 = new MovieModel ('Terminator Genesis', 'Accion', 'Im back', 'Arnold Swartzeneger', 'Prohibida para menores 16');
    p1.url = "assets//imgs//terminatorg.jpg";
    p1.sinopsis = "Un asesino regresa del futuro para matar a la madre de un lider";
    p1.puntaje=10;
    p1.disponible=true;
    p1.gusto = true;
    this.misFavoritas.push(p1);
    //
    const p3 = new MovieModel ('Rapido y Furioso 7', 'Accion', 'Cuando te juegas la vida, es cuando mas dependes de ti mismo', 'Brian OConner', 'Prohibida para menores 18');
    p3.url = "assets//imgs//fyf7.jpg";
    p3.sinopsis = "El hermano de un hombre muerto busca vengarse de la pandilla de Toretto.";
    p3.puntaje=6;
    p3.disponible=true;
    p3.gusto = true;
    this.misFavoritas.push(p3);
    //
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomiendoPage');
  }

}
