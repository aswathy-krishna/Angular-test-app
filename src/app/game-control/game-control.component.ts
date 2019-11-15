import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  Lastval = 0;

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.Lastval + 1);
      this.Lastval++;
    },1000)
  }
  onpauseGame(){
    clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit() {
  }

}
