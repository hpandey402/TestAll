import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.scss']
})
export class ConditionalComponent implements OnInit {

  age = 18;
  constructor() { }

  ngOnInit(): void {
  }

  getDataFromTs(){
    return this.age > 18;
  }

}
