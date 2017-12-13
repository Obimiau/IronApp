import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  project = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private projectProvider:ProjectProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  createProject() {
    this.projectProvider.createProject(this.project).subscribe(() => {
      this.navCtrl.setRoot(HomePage);
    });
  }
}
