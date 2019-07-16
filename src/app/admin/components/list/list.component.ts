import { Component } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = 'Animals List';
  // animals = [0, 1, 2, 3, 4];
  animals = new Array(20)
}
