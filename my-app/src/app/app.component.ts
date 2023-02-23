import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  constructor() {
    let ofOperator = of(1, 2, 3, 4, 5);
    ofOperator.subscribe((x) => {
      console.log(x);
    });
   let subscriber1= ofOperator.subscribe((x) => {
      console.log(x);
    });
    subscriber1.unsubscribe();
  }
}
