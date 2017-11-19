import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarComponent implements OnInit {

  carName = 'Lada';
  carYear = 1999;

  dayMneNazvanie(){
    return this.carName;
  }

  constructor() { }

  ngOnInit() {
  }

}
