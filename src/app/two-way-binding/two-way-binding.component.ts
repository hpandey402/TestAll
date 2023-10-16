import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  modelTest = 'test';
  constructor() { }

  ngOnInit(): void {
  }

  getModelValue(){
  return this.modelTest;
  }

  setModelValue(){
   this.modelTest = 'Updated the model value to max';
  }

}
