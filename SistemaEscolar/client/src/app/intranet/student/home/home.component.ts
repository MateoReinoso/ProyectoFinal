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
  
  ngOnInit(): void {
    this.credential = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credential);
  }

  getNotes() {
    this.schoolService.getNotes(this.credential.COD_PERSONA)
      .subscribe(
        res => {
          console.log(res);
          this.credential = res;
        },
        err => console.error(err)
      );
  }

}
