import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { MenuItem, MessageService, Message } from 'primeng/api';
import { CampusService } from '../../../services/campus.service';
import { BuildingServiceService } from '../../../services/building-service.service';

@Component({
  selector: 'app-home-administrative',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentAdministrative implements OnInit {

  constructor(private loginService: LoginService, private campusService: CampusService, private buildingService: BuildingServiceService) { }

  selectedCampus: Number;
  credentials: any =[];
  items: MenuItem[];
  campusList: boolean =false;
  buildingList: boolean =false;
  classroomList: boolean =false;
  campus: any = [];
  buildings: any = [];

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
          this.getCampus();
        }
      },
      {
        label: 'Edificios',
        icon: 'pi pi-bars',
        command: () => {
          this.campusList=false;
          this.buildingList=true;
          this.classroomList=false;
          this.getCampus();
        }
      },
      {
        label: 'Aulas',
        icon: 'pi pi-bars',
        command: () => {
          
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
  getBuildingByCampus(codEdificio) {
    console.log(this.credentials.COD_PERSONA);

    this.buildingService.getBuilgingByCampus(codEdificio)
      .subscribe(
        res => {
          this.buildings = res;
          console.log(this.buildings);
        },
        err => console.error(err)
      );
  }

  onChange(selectedCampus){
    this.getBuildingByCampus(selectedCampus.COD_ASIGNATURA);
  }
  
  
  
  
}
