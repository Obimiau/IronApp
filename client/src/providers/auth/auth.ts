import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/api/auth`;

@Injectable()
export class AuthProvider {
  options:object = {
    withCredentials:true
  }

  user:object;
  loginEvent:EventEmitter<object> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  handleError(e) {
    const error_message = e.message;
    console.error(error_message);
    return Observable.throw(e.message);
  }

  handleUser(obj) {
    this.user = obj;
    this.loginEvent.emit(this.user);
    return this.user;
  }

  signup(user:object) {
    return this.http.post(`${BASE_URL}/signup`, user, this.options)
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(username:string, password:string) {
    console.log(`Login with user:${username} and password ${password}`);
    return this.http.post(`${BASE_URL}/login`, {username, password}, this.options)
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${BASE_URL}/logout`,this.options)
      .map(user => this.handleUser(null))
      .catch(this.handleError);
  }

  getGroups() {
    return this.http.get(`${BASE_URL}/groups`,this.options);
  }

  isLoggedIn() {
    return this.http.get(`${BASE_URL}/loggedin`,this.options)
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }
}
