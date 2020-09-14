import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
    this.getMaterias();
  }

  getMaterias(){

  }

  getAula(){

  }

  onChangeLevel(selectedLevel){
    console.log(selectedLevel);
    this.idLevelCode = selectedLevel.COD_NIVEL_EDUCATIVO;
    this.getAula();
    this.dropClassroom=true;
  }

  onChangeClassroom(selectedClassroom){
    console.log(selectedClassroom);
    this.idClassroomCode=selectedClassroom.COD_PARALELO;
    this.idPeriodCode=selectedClassroom.COD_PERIODO_LECTIVO;
    console.log(this.idClassroomCode);
    console.log(this.idPeriodCode);
  }

}
