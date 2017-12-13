import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { TalksPage } from '../pages/talks/talks';
import { SignupPage } from '../pages/signup/signup';
import { ProjectPage } from '../pages/project/project';
import { EditPage } from '../pages/edit/edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { GroupProvider } from '../providers/group/group';
import { KeysPipe } from '../pipes/keys/keys';
import { PipesModule } from '../pipes/pipes.module';
import { UserProvider } from '../providers/user/user';
import { ProjectProvider } from '../providers/project/project';
import { JokesProvider } from '../providers/jokes/jokes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TalksPage,
    SignupPage,
    ProjectPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    PipesModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCvNxCNUC85Eq295bmyTtrnKJQfCaGJczA",
      authDomain: "ironapp-ec1a6.firebaseapp.com",
      databaseURL: "https://ironapp-ec1a6.firebaseio.com",
      projectId: "ironapp-ec1a6",
      storageBucket: "ironapp-ec1a6.appspot.com",
      messagingSenderId: "303054697473"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TalksPage,
    SignupPage,
    ProjectPage,
    EditPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    GroupProvider,
    UserProvider,
    Camera,
    ProjectProvider,
    JokesProvider
  ]
})
export class AppModule {}
