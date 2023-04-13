import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  digital: Boolean;
  currentTime: Date;

  constructor() {
    this.digital = false;
    this.currentTime = new Date();
    setInterval(() => {
      this.currentTime = new Date();
    }
    , 1000);
  }

  changeClock(event: Event) {
    this.digital = (event.target as HTMLInputElement).checked;
  }
}
