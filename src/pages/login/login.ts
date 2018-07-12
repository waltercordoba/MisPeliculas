import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {name: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  login() {
    this.navCtrl.setRoot(TabsPage, {user: this.user.name});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
