import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalksPage } from './talks';

@NgModule({
  declarations: [
    TalksPage,
  ],
  imports: [
    IonicPageModule.forChild(TalksPage),
  ],
})
export class TalksPageModule {}
