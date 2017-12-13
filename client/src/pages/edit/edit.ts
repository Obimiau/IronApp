import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private userProvider: UserProvider) {
    this.user = this.authProvider.user;
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  updateProfile() {
    this.userProvider.editUser(this.user).subscribe(() => {
      this.navCtrl.setRoot(HomePage)
    });
  }
}
