import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  user = {};
  options: CameraOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private userProvider: UserProvider, private camera: Camera) {
    this.user = this.authProvider.user;
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.user['avatar'] = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
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
