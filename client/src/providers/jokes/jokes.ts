import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JokesProvider {
  options:object = {
    withCredentials:true
  }

  constructor(public http: HttpClient) {
    console.log('Hello JokesProvider Provider');
  }

  getJoke() {
    return this.http.get(`http://localhost:3000/api/jokes`, this.options);
  }

}
