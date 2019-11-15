import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-app2';
  oddNum :number[] =[];
  evenNum :number[] = [];
  onIntervalFired(IntervalFire :number){
    console.log(IntervalFire);
    if(IntervalFire % 2 === 0){
      this.evenNum.push(IntervalFire);
    }else{
      this.oddNum.push(IntervalFire);
    }
  }
}
