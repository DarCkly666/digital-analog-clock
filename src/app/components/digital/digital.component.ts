import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent {
  @Input() time: Date;

  constructor() {
    this.time = new Date();
  }
}
