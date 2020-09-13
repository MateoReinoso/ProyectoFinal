import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingServiceService {

  constructor(private http: HttpClient) {
    API_URI = 'http://localhost:3000/system'
  constructor(private http: HttpClient) { }

  getCredentials( USER:string, PASS: string){
    return this.http.get(`${this.API_URI}/login/${USER}/${PASS}`);
  }
  getCampus(){
    return this.http.get(`${this.API_URI}/campus/`);
  }
  getCampusById(id: number){
    return this.http.get(`${this.API_URI}/campus/${id}`);
  }
  updateLoginDate(USER: string){
    return this.http.put(`${this.API_URI}/login/${USER}`, null);
   }
}
