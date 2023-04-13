import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.css'],
})
export class AnalogComponent implements OnChanges {
  @Input() time: Date;
  rotateHour: number;
  rotateMinute: number;
  rotateSecond: number;

  constructor() {
    this.time = new Date();
    this.rotateHour = 360;
    this.rotateMinute = 60;
    this.rotateSecond = 30;
  }

  private updateClock() {
    this.rotateHour = this.time.getHours() * 30 - 90;
    this.rotateMinute = this.time.getMinutes() * 6 - 90;
    this.rotateSecond = this.time.getSeconds() * 6 - 90;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['time'].currentValue);
    this.updateClock();
  }
}
