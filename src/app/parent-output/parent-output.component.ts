import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.scss']
})
export class ParentOutputComponent implements OnInit {

  childData = '';
  constructor() { }

  ngOnInit(): void {
  }

  getChildData(event:any){
   this.childData = event;
  }

}
