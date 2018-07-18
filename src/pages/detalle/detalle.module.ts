import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePage } from './detalle';
import { PipesModule } from "../../pipes/pipes.module";
@NgModule({
  declarations: [
    DetallePage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePage),
    PipesModule
  ],
})
export class DetallePageModule {}
