import { NgModule } from '@angular/core';
import { MovieInfoComponent } from './movie-info/movie-info';
import { clasificaComponent } from './clasifica/clasifica';
import { puntajeComponent } from './puntaje/puntaje';

@NgModule({
	declarations: [
    MovieInfoComponent,
		clasificaComponent,
		puntajeComponent
	],
	imports: [],
	exports: [
    MovieInfoComponent,
		clasificaComponent,
		puntajeComponent
	]
})
export class ComponentsModule {}
