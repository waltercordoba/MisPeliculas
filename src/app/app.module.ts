import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { listaPeliculasPage } from '../pages/listaPeliculas/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';
import { RecomiendoPage } from '../pages/recomiendo/recomiendo';
import { PerfilPage } from '../pages/perfil/perfil';
import { MiProveedorProvider } from '../providers/mi-proveedor/mi-proveedor';
import { LoginPage } from '../pages/login/login';
import { DetallePage } from "../pages/detalle/detalle";

@NgModule({
  declarations: [
    MyApp,
    listaPeliculasPage,
    RecomiendoPage,
    PerfilPage,
    TabsPage,
    LoginPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    listaPeliculasPage,
    RecomiendoPage,
    PerfilPage,
    TabsPage,
    LoginPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MiProveedorProvider
  ]
})
export class AppModule {}
