import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
