import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  label = "max";
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    this.label = "well";
  }

  cononicalEvent(){
    this.label = "MaxWEll"
  }

  onInputChange(){
    this.label = "Input value changed"
  }

  onValueChanged(event:any){
   this.label = event.target.value;
  }

  keyupEmitter(){
    console.log("keyup is running");
  }

  outerEmitter(){
    console.log("outeremitter called");
    this.label = 'outer box emitted';
  }
  innerEmitter(){
    console.log("innerEmitter called");
    this.label = 'inner box emitted';
  }

}
