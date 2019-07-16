import { Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
    <h2>{{title}}</h2>

    <input type="text" [(ngModel)]="emailContacto"/>
    <button (click)="guardarEmail()"> Guardar email</button>
    `,
})
export class GuardarEmailComponent {
  title = 'Save Mail - Component';
  emailContacto: string;
  
  guardarEmail() {
    localStorage.setItem('emailcontacto', this.emailContacto) 
    console.log(localStorage.getItem('emailcontacto'))
  }
}
