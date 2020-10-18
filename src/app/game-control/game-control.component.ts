import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalEmitter = new EventEmitter<number>(); // counter to increment numbers
  interval; // reference to store the interval
  counter;

  constructor() { }

  ngOnInit(): void {
    this.counter = 0;
  }

  onGameStart()  {
    this.interval = setInterval(() => {
      this.intervalEmitter.emit(this.counter + 1)
      this.counter++;
    }, 1000);
  }

  onGameStop()  {
    clearInterval(this.interval);
  }

}
