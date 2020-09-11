import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentTeacher implements OnInit {

  constructor(private loginService: LoginService) { }

  credential: any =[];

  ngOnInit(): void {
    this.credential=this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credential);
  }

}
