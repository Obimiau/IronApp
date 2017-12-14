import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {};
  groups = [];
  avatar = 'https://openclipart.org/image/2400px/svg_to_png/247324/abstract-user-flat-1.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthProvider, private camera: Camera) {
    this.auth.getGroups().subscribe((groups) => {
      this.groups = groups['groups'];
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  takePicture() {
    let options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.avatar = 'data:image/jpeg;base64,' + imageData;
      this.user['avatar'] = this.avatar;
     }, (err) => {
      // Handle error
     });
  }

  signup(user) {
    this.auth.signup(user).subscribe( (data) => {
      if(data) {
        this.navCtrl.pop();
      }
    });
  }
}
