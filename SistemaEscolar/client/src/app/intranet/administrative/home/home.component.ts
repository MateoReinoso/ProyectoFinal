import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { MenuItem, MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-home-administrative',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentAdministrative implements OnInit {

  constructor(private loginService: LoginService) { }

  credentials: any =[];
  items: MenuItem[];

  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    this.items = [{
      label: 'Opciones Administrativo',
      items: [{
        label: 'Sedes',
        icon: 'pi pi-briefcase',
        command: () => {

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

  
  
  
}
