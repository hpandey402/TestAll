import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() title:string;

  @Input() metersValue: number = 0;

  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
   if(changes.metersValue && changes.metersValue.currentValue){
    this.metersValue = changes.metersValue.currentValue * 100;
   }else{
    this.metersValue = 0;
   }
  }

  changeTitle(val:string){
    this.title = val;
  }

}
