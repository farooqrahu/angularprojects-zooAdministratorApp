import { Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
  <h2> {{title}} </h2>
  <span *ngIf="emailContacto">Email de contacto: {{emailContacto}} 
    <button (click)="borrarEmail()">Eliminar email de contacto</button>
  </span>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'ShowMail - Component';
  emailContacto: string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailcontacto')
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailcontacto')
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
