import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyprojectsPage } from './myprojects';

@NgModule({
  declarations: [
    MyprojectsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyprojectsPage),
  ],
})
export class MyprojectsPageModule {}
