import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login} from '../models/School';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {


  API_URI = 'http://localhost:3000/system'
  constructor(private http: HttpClient) { }

  getCredentials( USER:string, PASS: string){
    return this.http.get(`${this.API_URI}/login/${USER}/${PASS}`);
  }

  updateLoginDate(USER: string){
    return this.http.put(`${this.API_URI}/login/${USER}`, null);
  }

  getNotes(idp: number){
    return this.http.get(`${this.API_URI}/school/p/q/${idp}`);
  }
}
