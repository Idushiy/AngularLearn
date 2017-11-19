import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: ' app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent implements OnInit {

  carName='';
  addCarStatus = false;
  inputText = 'Введите текст';
  cars = ['Porshe', 'VAZ', 'MBW']
  items = [{id: 1, name: 'vaz'}, {id: 3, name: 'bilaz'}, {id: 4, name: 'gaz'}, {id: 8, name: 'velik'}];

  addCar() {
   this.addCarStatus = true;
   this.cars.push(this.carName);
   this.carName = '';
  }

  addText(event) {
    this.inputText = event.target.value;

  }

  constructor() {

  }

  ngOnInit() {
  }

}
