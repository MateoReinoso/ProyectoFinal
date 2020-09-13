import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BuildingServiceService {
  API_URI = 'http://localhost:3000/system'
  constructor(private http: HttpClient) { }
  getCredentials(USER: string, PASS: string) {  
    return this.http.get(`${this.API_URI}/login/${USER}/${PASS}`);
  }
  getBuilding() {
    return this.http.get(`${this.API_URI}/bulging/`);
  }
  getBuilgingByCampus(id: number) {
    return this.http.get(`${this.API_URI}/building/${id}`);
  }
  getBuilgingById(id: number,idB: Number) {
    return this.http.get(`${this.API_URI}/building/${id}/${idB}`);
  }
  updateLoginDate(USER: string) {
    return this.http.put(`${this.API_URI}/login/${USER}`, null);
  }
  
}
