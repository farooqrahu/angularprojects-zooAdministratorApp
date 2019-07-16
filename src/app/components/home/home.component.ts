import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  title = 'Welcome to NGZOO';

  ngOnInit(){
    //cada vez que cargue un componente, se lanzará el doCheck
    console.log("Home.component cargado ^^")
  }
}
