import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { MenuItem, MessageService, Message } from 'primeng/api';
import { CampusService } from '../../../services/campus.service';
import { BuildingServiceService } from '../../../services/building-service.service';
import { ClassroomService} from '../../../services/classroom.service';

@Component({
  selector: 'app-home-administrative',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentAdministrative implements OnInit {

  constructor(private loginService: LoginService, private campusService: CampusService, private buildingService: BuildingServiceService,
    private classroomService: ClassroomService) { }

  selectedCampus: Number;
  selectedBuilding: Number;
  credentials: any =[];
  items: MenuItem[];
  btnAgregar: ButtonModule[];
  campusList: boolean =false;
  buildingList: boolean =false;
  classroomList: boolean =false;
  campusOption: boolean =false;
  campusForm: boolean =false;
  classroomflag: boolean =false;
  campus: any = [];
  oneCampus:any =[];
  buildings: any = [];
  classrooms: any=[];
  buildingOption: boolean =false;
  agregarAula:boolean =false;
  agregarEdificio:boolean =false;

  campusName:string ="";
  campusDir:string ="";
  campusCodP:string ="";


  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    //this.getCampus();
    this.items = [{
      label: 'Opciones Administrativo',
      items: [{
        label: 'Sedes',
        icon: 'pi pi-briefcase',
        command: () => {
          this.campusList=true;
          this.buildingList=false;
          this.classroomList=false;
          this.campusOption=false;
          this.buildingOption=false;
          this.classroomflag=false;
          this.agregarAula=false;
          this.agregarEdificio=false;
          this.getCampus();
        }
      },
      {
        label: 'Edificios',
        icon: 'pi pi-bars',
        command: () => {
          this.agregarAula=false;
          this.campusList=false;
          this.campusOption=true;
          this.classroomList=false;
          this.buildingOption=false;
          this.classroomflag=false;
          this.agregarEdificio=true;
          this.getCampus();
        }
      },
      {
        label: 'Aulas',
        icon: 'pi pi-bars',
        command: () => {
          this.buildingOption=false;
          this.buildingList=false;
          this.classroomflag=true;
          this.campusList=false;
          this.campusOption=true;
          this.agregarAula=true;
          this.classroomList=false;
          this.agregarEdificio=false;
          this.getCampus();
        }
      }
    ]
    }
    ];
  }
  getCampus() {
    console.log(this.credentials.COD_PERSONA);

    this.campusService.getCampus()
      .subscribe(
        res => {
          this.campus = res;
          console.log(this.campus);
        },
        err => console.error(err)
      );
  }
  getCampusByID(id) {
    console.log(this.credentials.COD_PERSONA);

    this.campusService.getCampusById(id)
      .subscribe(
        res => {
          this.oneCampus = res;
          console.log(this.oneCampus);
        },
        err => console.error(err)
      );
  }
  getBuildingByCampus(codEdificio) {
    console.log(this.credentials.COD_PERSONA);
    this.getCampusByID(codEdificio);
    this.buildingService.getBuilgingByCampus(codEdificio)
      .subscribe(
        res => {
          this.classroomflag ? this.buildingOption=true:this.buildingList=true;
          this.buildings = res;
          console.log(this.buildings);
        },
        err => console.error(err)
      );
  }
  getClassroomByBuilding(codEdificio) {
    console.log(this.credentials.COD_PERSONA);
    this.classroomService.getClassroomByBuilding(codEdificio)
      .subscribe(
        res => {
          this.classroomList=true;
          this.classrooms = res;
          console.log(this.classrooms);
        },
        err => console.error(err)
      );
  }
  

  onChange(selectedCampus){
    this.getBuildingByCampus(selectedCampus.COD_SEDE);
  }
  onChange1(selectedBuilding){
    this.getClassroomByBuilding(selectedBuilding.COD_SEDE);
  }
  
  addCampusForm()
   {
    this.campusForm=true; 
    this.campusList=false;
    console.log("Estoy llegando a metodo por lo menos")
   }
   addCampus()
   {
    this.campusForm=false; 
    this.campusList=true;
    console.log(this.campusName);
    console.log(this.campusDir);
    console.log(this.campusCodP);
    console.log("Estoy llegando a metodo por lo menos");
   }
  
  
}
