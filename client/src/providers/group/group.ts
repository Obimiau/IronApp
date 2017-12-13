import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupProvider {
  options:object = {
    withCredentials:true
  }

  constructor(public http: HttpClient) {
    console.log('Hello GroupProvider Provider');
  }

  getCurrentUserGroup() {
    return this.http.get(`http://localhost:3000/api/group`, this.options);
  }

  startPresentation(id) {
    return this.http.post(`http://localhost:3000/api/group/present/${id}`, {}, this.options)
  }

  getRanking() {
    return this.http.get(`http://localhost:3000/api/group/ranking`, this.options);
  }

  setValoration(projectIndex, valoration) {
    return this.http.post(`http://localhost:3000/api/group/rate/${projectIndex}`, valoration, this.options)
  }
}
