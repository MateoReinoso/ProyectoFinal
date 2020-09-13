import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, Message } from 'primeng/api';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {

  credentials: any = [];
  subjects: any = [];
  students: any  = [];
  levels: any = [];
  items: MenuItem[];
  idSubjectCode: number;
dropLevel=false;
  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    this.items=this.subjects;
    this.getMaterias();
  }


  getMaterias(){
    this.schoolService.getMateriasTeacher(this.credentials.COD_PERSONA)
      .subscribe(
        res => {
          this.subjects = res;
          console.log(this.subjects);
        },
        err => console.error(err)
      );

  }

  getNivel(idProf){
    this.schoolService.getObtNivel(idProf)
    .subscribe(
      res => {
        this.levels = res;
        console.log(this.levels);
      },
      err => console.error(err)
    );
  }

  onChange(selectedSubject){
  
    console.log(selectedSubject.COD_ASIGNATURA);
    this.idSubjectCode=selectedSubject.COD_ASIGNATURA;
    this.getNivel(this.credentials.COD_PERSONA);
    this.dropLevel=true;
    
    //this.get(selectedSubject);
  }

  onChangeLevel(selectedLevel){
    console.log(selectedLevel.COD_NIVEL_EDUCATIVO);

  }
}
