import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentTitle = "Parent data updated";
  metersModel:number;
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(){
    this.parentTitle = 'Parent Title changed';
  }

}
