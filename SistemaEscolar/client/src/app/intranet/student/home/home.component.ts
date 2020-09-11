import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';
import { Login  } from '../../../models/School';

@Component({
  selector: 'app-home-student',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentStudent implements OnInit {



  constructor(private loginService: LoginService, private schoolService: SchoolService) { }

  credential: any = [];
  notes: any = [];
  
  ngOnInit(): void {
    this.credential = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credential);
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

}
