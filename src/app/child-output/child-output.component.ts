import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
  @Output() childEvent = new EventEmitter<any>();
  dataModel:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
  this.childEvent.emit(this.dataModel);
  }

}
