import { Component } from '@angular/core';
import { listaPeliculasPage } from '../listaPeliculas/home';
import { RecomiendoPage } from '../recomiendo/recomiendo';
import { PerfilPage } from '../perfil/perfil';
import { NavParams } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = listaPeliculasPage;
  tab2Root = RecomiendoPage;
  tab3Root = PerfilPage;
  constructor(params: NavParams) {
    this.user = {user: params.data.user};
  }
}
