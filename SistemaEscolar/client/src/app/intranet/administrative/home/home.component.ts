import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-administrative',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentAdministrative implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  procesaPropagar(data) {
    console.log(data);
  }
}
