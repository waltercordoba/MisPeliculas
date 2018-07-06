import { NgModule } from '@angular/core';
import { MovieInfoComponent } from './movie-info/movie-info';
import { clasificaComponent } from './clasifica/clasifica';
import { puntajeComponent } from './puntaje/puntaje';
import { IonicModule } from "ionic-angular";

@NgModule({
	declarations: [
    MovieInfoComponent,
		clasificaComponent,
		puntajeComponent
	],
	imports: [IonicModule],
	exports: [
    MovieInfoComponent,
		clasificaComponent,
		puntajeComponent
	]
})
export class ComponentsModule {}
