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
  classrooms: any = [];
  items: MenuItem[];
  idSubjectCode: number;
dropLevel=false;
idLevelCode: number;
dropClassroom=false;
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

  getAula(){
    this.schoolService.getEnvioDatos(this.credentials.COD_PERSONA, this.idSubjectCode, this.idLevelCode)
    .subscribe(
      res => {
        this.classrooms = res;
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
    console.log(this.levels);
    
    //this.get(selectedSubject);
  }

  onChangeLevel(selectedLevel){
    console.log(selectedLevel);
    this.idLevelCode = selectedLevel.COD_NIVEL_EDUCATIVO;
    this.getAula();
    this.dropClassroom=true;
  }

  onChangeClassroom(selectedClassroom){
    console.log(selectedClassroom);
  }
}
