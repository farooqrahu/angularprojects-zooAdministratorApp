import { Component } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
  <div class="main-email-container">
    <h2> {{title}} </h2> 
    <hr>
    <mostrar-email></mostrar-email>
    <guardar-email></guardar-email>
  </div>
  `,
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent {
  title = 'MainEmail - Component';
}