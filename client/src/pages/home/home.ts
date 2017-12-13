import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ProjectPage } from '../project/project';
import { JokesProvider } from '../../providers/jokes/jokes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {};
  project = {};
  jokeQ = '';
  jokeA = '';

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private jokesProvider: JokesProvider) {
    this.user = this.authProvider.user;
    this.jokesProvider.getJoke().subscribe((joke) => {
      this.jokeQ = joke['description'].split('A.')[0];
      this.jokeA = joke['description'].split('A.')[1];
    });
  }

  createProject() {
    this.navCtrl.push(ProjectPage);
  }
}
