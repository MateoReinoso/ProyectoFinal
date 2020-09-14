import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../../services/school.service';

@Component({
  selector: 'app-asistance',
  templateUrl: './asistance.component.html',
  styleUrls: ['./asistance.component.css']
})
export class AsistanceComponent implements OnInit {
  
  dropClassroom=false;
  dropLevel=false;
  idClassroomCode:number;
  idLevelCode:number;
  idPeriodCode:number;
  levels: any = [];
  classrooms: any = [];
  students: any = [];
  fechaActual:Date = new Date();

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getLevel();
  }

  getLevel(){
    this.schoolService.getNivelLista()
    .subscribe(
      res => {
        this.levels=res;
        console.log(this.levels);
      },
      err => console.error(err)
    );
  }

  getAula(codLevel){
    this.schoolService.getObtenerParalelo(codLevel)
    .subscribe(
      res => {
        this.classrooms=res;
        console.log(this.classrooms);
      },
      err => console.error(err)
    );
  }

  getStudents(){
    this.schoolService.getListaParalelo(this.idLevelCode, this.idClassroomCode)
    .subscribe(
      res => {
        this.students=res;
        console.log(this.students);
      },
      err => console.error(err)
    );
  }

  onChangeLevel(selectedLevel){
    console.log(selectedLevel);
    this.idLevelCode = selectedLevel.COD_NIVEL_EDUCATIVO;
    this.getAula(this.idLevelCode);
    this.dropClassroom=true;
  }

  onChangeClassroom(selectedClassroom){
    console.log(selectedClassroom);
    this.idClassroomCode=selectedClassroom.COD_PARALELO;
    this.getStudents();
    
    
  }

}
