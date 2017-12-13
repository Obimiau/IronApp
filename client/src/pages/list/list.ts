import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  users = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private groupProvider: GroupProvider) {
    this.groupProvider.getRanking().subscribe( data => {
      this.users = data['users'];
    });
  }
}
