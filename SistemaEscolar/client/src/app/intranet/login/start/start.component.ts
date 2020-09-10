import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router'
import { SchoolService } from '../../../services/school.service'
import { Login} from '../../../models/School'
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {

  credential: any = {
    COD_USUARIO: 0,
    COD_PERSONA: 0,
    NOMBRE_USUARIO: '',
    CLAVE: '',
    ESTADO: '',
    ULT_FECHA_INGRESO: new Date(),
    INTENTOS_FALLIDOS: 0,
    COD_ROL: 0,
    NOMBRE: ''
  };

  @Output()
  propagar = new EventEmitter<string>();

  constructor(private schoolService: SchoolService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }



  getCredentials(){
    if(this.credential.NOMBRE_USUARIO && this.credential.CLAVE){
      this.schoolService.getCredentials(this.credential.NOMBRE_USUARIO,this.credential.CLAVE)
      .subscribe(
      res => {
        this.credential=res;
        console.log(this.credential);
        console.log(this.credential[0].COD_ROL);
        const rol = this.credential[0].COD_ROL;

        if(rol == 2){
          this.router.navigate(['/administrative/home']);
          this.propagar.emit(this.credential[0].COD_PERSONA);
        }
        else if(rol == 3)
        {
          this.router.navigate(['/teacher/home']);
          this.propagar.emit(this.credential[0].COD_PERSONA);

        }
        else if(rol == 4)
        {
          this.router.navigate(['/student/home']);
          this.propagar.emit(this.credential[0].COD_PERSONA);
        }
      },
      err => console.log(err)
    )
    }
  }
}

