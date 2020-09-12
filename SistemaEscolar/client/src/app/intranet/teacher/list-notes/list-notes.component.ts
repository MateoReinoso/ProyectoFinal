import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';
import { MenuItem, MessageService, Message } from 'primeng/api';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {TabMenuModule} from 'primeng/tabmenu';




@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  subjectlist: SelectItem[];

  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) {

   }

  credentials: any = [];
  subjects: any = [];
  students: any  = [];
  items: MenuItem[];
  notes: any = [];
  idStudentButton = false;
  partialOptions: MenuItem[];
  public optionSubject = false;
   codAlumno: number;
   tablenotes = false;
   notes1p = false;
   notes2p = false;
  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    this.getMaterias();
    
  }

  getListStudent(cap: number){
    this.schoolService.getListStudents(this.credentials.COD_PERSONA,cap)
    .subscribe(
      res =>{
        this.students = res;
        console.log(this.students);
      },
      err => console.log(err)
    );
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


  onChange(selectedSubject){
    this.tablenotes = false;
    this.idStudentButton = false;
    this.notes1p=false;
      this.notes2p=false;
    console.log(selectedSubject.COD_ASIGNATURA);
    this.getListStudent(selectedSubject.COD_ASIGNATURA);
    this.optionSubject=true;
    //this.get(selectedSubject);
  }

    selectStudent(idStudent)
    {
      this.notes1p=false;
      this.notes2p=false;
      this.tablenotes = false;
      console.log(idStudent);
      this.idStudentButton = true;
      this.codAlumno=idStudent;
      this.partialOptions = [{
        label: 'Seleccione el Parcial',
        items: [{
          label: 'Primer Parcial',
          icon: 'pi pi-briefcase',
          command: () => {
            this.getNotes(this.codAlumno);
            this.tablenotes=true;
          }
        },
        {
          label: 'Segundo Parcial',
          icon: 'pi pi-bars',
          command: () => {
           this.getNotes2(this.codAlumno);
           this.tablenotes=true;
          }
        }
        ]
      }
      ];
    }

    getNotes(codAlumno) {
      console.log(codAlumno);
  
      this.schoolService.getNotes(codAlumno)
        .subscribe(
          res => {
            this.notes = res;
            console.log(this.notes);
            this.notes1p=true;
            this.notes2p = false;
          },
          err => console.error(err)
        );
    }
  
    getNotes2(codAlumno) {
      console.log(codAlumno);
      this.schoolService.getNotes2(codAlumno)
        .subscribe(
          res => {
            this.notes = res;
            console.log(this.notes);
            this.notes1p=false;
            this.notes2p=true;
          },
          err => console.error(err)
        );
    }
  save(severity: string) {
    this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
}

update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
}

}
