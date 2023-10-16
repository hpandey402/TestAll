import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  age = 20;
  dynamicFontSize = '24px';
  dynamicFontSizewithoutUnit = 40;
  constructor() { }

  ngOnInit(): void {
  }

}
