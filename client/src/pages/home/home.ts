import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ProjectPage } from '../project/project';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {};

  constructor(public navCtrl: NavController, private authProvider: AuthProvider) {
    // Recupero usuario del provider auth, que guarda al hacer loggin
    this.user = this.authProvider.user;
  }

  createProject() {
    this.navCtrl.push(ProjectPage);
  }
}
