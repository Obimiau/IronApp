import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
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
  username;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthProvider) {
    this.auth.isLoggedIn().subscribe( (data) => {
      if(data) {
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

  login(username, password){
    this.auth.login(username,password).subscribe( (data) => {
      if (data.username) {
        this.navCtrl.setRoot(HomePage)
      }
    });
  }

  logout() {
    this.auth.logout().subscribe();
  }

  signup(username, password) {
    this.auth.signup(username, password).subscribe();
  }

  ngOnInit() {
  }

}
