import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { MenuItem, MessageService, Message } from 'primeng/api';
import { CampusService } from '../../../services/campus.service';


@Component({
  selector: 'app-home-administrative',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentAdministrative implements OnInit {

  constructor(private loginService: LoginService, private campusService: CampusService) { }

  credentials: any =[];
  items: MenuItem[];
  campusList: boolean =false;
  buildingList: boolean =false;
  classroomList: boolean =false;
  campus: any = [];

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
  
  
  
  
}
