import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  ariaLabelDynamic = "Close";
  rowSpanCount =  2;
  inpValue = "testData";
  widgetDynamic = "dynamic";
  constructor() { }

  ngOnInit(): void {
  }

}
