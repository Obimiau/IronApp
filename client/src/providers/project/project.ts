import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectProvider {
  options:object = {
    withCredentials:true
  }

  constructor(public http: HttpClient) {
    console.log('Hello ProjectProvider Provider');
  }

  getProjects() {
    return this.http.get(`http://localhost:3000/api/project/own`, this.options);
  }

  createProject(project) {
    return this.http.post(`http://localhost:3000/api/project`, project, this.options);
  }

}
