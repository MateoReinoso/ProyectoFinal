import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, Message } from 'primeng/api';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {

  credentials: any = [];
  subjects: any = [];
  students: any  = [];
  items: MenuItem[];

  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    this.items=this.subjects;
  }

}
