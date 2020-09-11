import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';
import { Login  } from '../../../models/School';
import { MenuItem, MessageService, Message } from 'primeng/api';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-home-student',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponentStudent implements OnInit {



  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) { }
  items: MenuItem[];
  credential: any = [];
  notes: any = [];
  
  ngOnInit(): void {
    this.items = [{
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
          label: 'Navigate',
          items: [{
              label: 'Angular Website',
              icon: 'pi pi-external-link',
              url: 'http://angular.io'
          },
          {
              label: 'Router',
              icon: 'pi pi-upload',
              routerLink: '/fileupload'
          }
      ]}
  ];
  }

  getNotes() {
    console.log(this.credential.COD_PERSONA);
    
    this.schoolService.getNotes(this.credential.COD_PERSONA)
      .subscribe(
        res => {
          this.notes = res;
          console.log(this.notes);
        },
        err => console.error(err)
      );
  }
  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}
}
