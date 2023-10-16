import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample Interpolation';
  heading = "interpolation heading";
  income = 4000;
  expenditure = 3000;
  metaData = {
    typeValue: 'text',
    placeholderValue:'Enter password',
    readOnlyValue: true
  }

  getName(){
    return "Max Millan";
  }
}
