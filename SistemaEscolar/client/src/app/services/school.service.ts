import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login} from '../models/School';
import { Nota1 } from '../models/School';
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

  getNotes2(idqs: number){
    return this.http.get(`${this.API_URI}/school/s/q/c/${idqs}`);
  }

  getHomework(ca: number, cal:number){
    return this.http.get(`${this.API_URI}/school/deberes/${ca}/${cal}`);
  }

  getListStudents(cd: number, cap:number){
    return this.http.get(`${this.API_URI}/school/liststudent/${cd}/${cap}`);
  }

  getMateriasTeacher(cp: number){
    return this.http.get(`${this.API_URI}/school/materias/${cp}`);
  }

  getMateria(mat: number){
    return this.http.get(`${this.API_URI}/school/${mat}`);
  }
  //asginar debere
  getAsignarDeber(asdb: number){
    return this.http.get(`${this.API_URI}/school/asignar/${asdb}`)
  }
  //materias primer parcial
  getMatAlPri(npa: number,cae:number){
    return this.http.get(`${this.API_URI}/school/alumn/cod/${npa}/${cae}`);
  }
  //materias segundo parcial
  getMatAlSeg(npas: number, caes:number){
    return this.http.get(`${this.API_URI}/school/alumn/cod/seg/${npas}/${caes}`);
  }

  //actualizar nota deberes
  updateNPP(notas:any, cad: number, cde: number) {
    return this.http.put(`${this.API_URI}/school/npp/${cad}/${cde}`,notas);
  }

  //subir deberes alumno
  getAddHomework(eds:number, dse:number){
    return this.http.get(`${this.API_URI}/school/est/deb/al/q/${eds}/${dse}`);
  }  

}
