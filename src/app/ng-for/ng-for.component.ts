import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  names = ['Max', 'Sunil', 'Isha', 'Jai'];
  complexArr = [
  {id:1, name:'Harry'},
  {id:2, name:'Larisin'},
  {id:3, name:'Max'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addElement(){
    this.complexArr.push({
      id:4,
      name:"Zoya"
    });
  }

}
