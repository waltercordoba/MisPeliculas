import { NgModule } from '@angular/core';
import { MovieInfoComponent } from './movie-info/movie-info';
import { clasificaComponent } from './clasifica/clasifica';
import { puntajeComponent } from './puntaje/puntaje';
import { IonicModule } from "ionic-angular";
import { MinilistComponent } from './minilist/minilist';

@NgModule({
	declarations: [
    MovieInfoComponent,
		clasificaComponent,
		puntajeComponent,
		MinilistComponent

	],
	imports: [IonicModule],
	exports: [
    MovieInfoComponent,
		clasificaComponent,
		puntajeComponent,
		MinilistComponent

	]
})
export class ComponentsModule {}
