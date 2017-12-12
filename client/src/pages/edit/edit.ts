import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
    this.user = this.authProvider.user;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}
