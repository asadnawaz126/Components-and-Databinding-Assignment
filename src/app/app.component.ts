import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components-and-Databinding-Assignment';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onEventFired(counter: number){
    console.log(counter);
    if (counter % 2 === 0 ){
      this.evenNumbers.push(counter);
    }
    else{
      this.oddNumbers.push(counter);
    }
  }
}
