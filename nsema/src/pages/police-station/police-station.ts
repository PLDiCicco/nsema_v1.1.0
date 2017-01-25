import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';


@Component({
  selector: 'page-police-station',
  templateUrl: 'police-station.html'
})
export class PoliceStationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliceStationPage');
  }

  policeWebsite() {
    let browser = new InAppBrowser('http://www.nspolice.net','_blank','location=yes');
    browser.close();
  }


}
