import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'Animals';

  ngOnInit(){
    //cada vez que cargue un componente, se lanzará el doCheck
    console.log("Animals.component cargado ^^")
  }
}
