import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent  {

  fruits = ['Mengo', 'Orange', 'Banana'];
  constructor() { }
  addFruit(item: any) {
   this.fruits = [...this.fruits, item];
  }

}
