import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';
import { MenuItem, MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) { }

  credentials: any = [];
  subjects: any = [];


  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
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


  onChange(selectedSubject){
    console.log(selectedSubject);
    //this.get(selectedSubject);
  }

}
