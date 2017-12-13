import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GroupProvider } from '../../providers/group/group';

@IonicPage()
@Component({
  selector: 'page-talks',
  templateUrl: 'talks.html',
})
export class TalksPage {
  talks = [];
  group = {};
  currentProject = 0;
  projects = [];
  rate = 3;
  comment = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private groupProvider: GroupProvider) {

    this.groupProvider.getCurrentUserGroup().subscribe( (data) => {
      this.group = data;
      // coger proyectos del grupo
      this.db.list(`${data['_id']}/projects`).valueChanges().subscribe((data) => {
        this.projects = data;
      });

      this.db.list(`${data['_id']}`).valueChanges().subscribe((data) => {
        this.currentProject = <any>data[1];
      });
    })
  }

  rating(rate) {
    this.rate = rate;
  }

  startPresentation() {
    this.groupProvider.startPresentation(this.group['_id']).subscribe();
  }

  postRating() {
    this.groupProvider.setValoration(this.currentProject, {
      rate: this.rate,
      comment: this.comment
    }).subscribe();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TalksPage');
  }

}
