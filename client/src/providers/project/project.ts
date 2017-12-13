import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProjectProvider Provider');
  }



}
