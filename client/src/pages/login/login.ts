import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;
  errorMessage = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
    this.auth.isLoggedIn().subscribe((data) => {
      if (data) {
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

  login(username, password) {
    this.auth.login(username, password).subscribe((data) => {
      if (data.username) {
        this.errorMessage = '';
        this.navCtrl.setRoot(HomePage)
      }
    }, (err) => {
      this.errorMessage = 'wrong username or password ';
    });
  }

  logout() {
    this.auth.logout().subscribe();
  }

  register() {
    this.navCtrl.push(SignupPage);
  }


  ngOnInit() {
  }

}
