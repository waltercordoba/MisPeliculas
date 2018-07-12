import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MiProveedorProvider } from "../../providers/mi-proveedor/mi-proveedor";

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  nombre:string;
  apellido:string;
  mail:string;
  meGustaron: number;
  miFavorita : string;
  urlfoto: string;
  constructor(private miPrv: MiProveedorProvider) {
  }
  ngOnInit() {
    this.nombre = "Walter";
    this.apellido = "Córdoba";
    this.mail = "cbawalter@gmail.com";
    this.meGustaron = this.miPrv.cuantasVistas();
    this.miFavorita = this.miPrv.getFavorita();
    this.urlfoto = "assets//imgs//mifoto.jpg";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
