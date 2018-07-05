import { Component } from '@angular/core';
import { listaPeliculasPage } from '../listaPeliculas/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = listaPeliculasPage;
  constructor() {

  }
}
