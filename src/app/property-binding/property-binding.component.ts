import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  inputType = "number";
  inputPlaceholder="Enter a password";
  inputReadonly=false;

  a=10;
  b=20;
  constructor() { }

  ngOnInit(): void {
  }

  getType(){
    return this.inputType;
  }

}
