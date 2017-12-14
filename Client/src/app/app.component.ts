import { AuthProvider } from './../providers/auth/auth';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { TalksPage } from '../pages/talks/talks';
import { SignupPage } from '../pages/signup/signup';
import { ProjectPage } from '../pages/project/project';
import { EditPage } from '../pages/edit/edit';
import { MyprojectsPage } from '../pages/myprojects/myprojects';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}> = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private authProvider: AuthProvider) {
    this.initializeApp();

    this.pages = [
      { title: 'Profile', component: HomePage, icon: 'home' },
      { title: 'Ranking', component: ListPage, icon: 'podium' },
      { title: 'Talks', component: TalksPage, icon: 'text' },
      { title: 'My Projects', component: MyprojectsPage, icon: 'md-laptop' },
      { title: 'Edit Profile', component: EditPage, icon: 'settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authProvider.logout().subscribe(() => {
      this.nav.setRoot(LoginPage);
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
