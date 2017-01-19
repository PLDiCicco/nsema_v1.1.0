import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PoliceStationPage } from '../police-station/police-station';
import { FireStationPage } from '../fire-station/fire-station';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  gotoPoliceStation() {
    this.navCtrl.push(PoliceStationPage);
  }

  gotoFireStation() {
    this.navCtrl.push(FireStationPage);
  }


}
