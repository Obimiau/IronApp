import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  options:object = {
    withCredentials:true
  }

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  editUser(user) {
    return this.http.post(`http://localhost:3000/api/user/edit`, user, this.options);
  }

}
