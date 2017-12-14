import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectProvider} from '../../providers/project/project';

@IonicPage()
@Component({
  selector: 'page-myprojects',
  templateUrl: 'myprojects.html',
})
export class MyprojectsPage {
  projects: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private projectProvider: ProjectProvider) {
    this.projectProvider.getProjects().subscribe( (data) => {
      this.projects = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprojectsPage');
  }

}
