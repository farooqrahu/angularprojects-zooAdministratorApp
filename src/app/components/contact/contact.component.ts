import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  emailContacto: string;

  ngOnInit(){
    //cada vez que cargue un componente, se lanzará el doCheck
    console.log("Contact.component cargado ^^")
  }
  guardarEmail() {
    localStorage.setItem('emailcontacto', this.emailContacto) 
    console.log(localStorage.getItem('emailcontacto'))
  }
}
