import { Component } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Administration Panel';

   highlightButton (event) {

    let activeButton = document.querySelectorAll('div.sidebar-admin button.active')[0];
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    event.currentTarget.classList.toggle('active');
  }
}
