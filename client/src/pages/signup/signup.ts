import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(user) {
    this.auth.signup(user).subscribe( (data) => {
      if(data) {
        this.navCtrl.pop();
      }
    });
  }
}
