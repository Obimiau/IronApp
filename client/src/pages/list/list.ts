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
    // If we navigated to this page, we will ha5a28465b926c4213dc2d28fbve an item available as a nav param
    this.groupProvider.getRanking('5a28465b926c4213dc2d28fb').subscribe( data => {
      this.users = data['users'];
    });
  }
}
