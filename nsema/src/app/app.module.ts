import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PoliceStationPage } from '../pages/police-station/police-station';
import { FireStationPage } from '../pages/fire-station/fire-station';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PoliceStationPage,
    FireStationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PoliceStationPage,
    FireStationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
