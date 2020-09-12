import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';
import { Login } from '../../../models/School';
import { MenuItem, MessageService, Message } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-student',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponentStudent implements OnInit {



  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) { }
  items: MenuItem[];
  credentials: any = [];
  notes: any = [];
  homeworks: any[];

  public notes2p = false;
  public notes1p = false;
  public tablenotes = false;
  public tablehomework = false;

  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    console.log(this.notes);
    this.items = [{
      label: 'Opciones Estudiante',
      items: [{
        label: 'Notas Primer Quimestre',
        icon: 'pi pi-bars',
        command: () => {
          this.tablenotes = true;
          this.getNotes();
          this.notes1p = true;
          this.notes2p = false;
          this.tablehomework=false;
        }
      },
      {
        label: 'Notas Segundo Quimestre',
        icon: 'pi pi-bars',
        command: () => {
          this.tablenotes = true;
          this.getNotes2();
          this.notes2p = true;
          this.notes1p = false;
          this.tablehomework=false;
        }
      },
      {
        label: 'Ver Deberes',
        icon: 'pi pi-briefcase',
        command: () => {
          this.tablehomework = true;
          this.notes1p= false;
          this.notes2p=false;
        }
      }
      ]
    }
    ];
  }

  getNotes() {
    console.log(this.credentials.COD_PERSONA);

    this.schoolService.getNotes(this.credentials.COD_PERSONA)
      .subscribe(
        res => {
          this.notes = res;
          console.log(this.notes);
        },
        err => console.error(err)
      );
  }

  getNotes2() {
    console.log(this.credentials.COD_PERSONA);
    this.schoolService.getNotes2(this.credentials.COD_PERSONA)
      .subscribe(
        res => {
          this.notes = res;
          console.log(this.notes);
        },
        err => console.error(err)
      );
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }
}
