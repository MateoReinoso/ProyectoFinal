import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header-i',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponentI implements OnInit {

  constructor( private loginService: LoginService) { }

  credentials: any =[];

    ngOnInit(): void {
      this.credentials=this.loginService.getsession();
      console.log(this.loginService.getsession());
      console.log(this.credentials);
    }
  
}
