import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.scss']
})
export class TemplateOutletComponent implements OnInit {

  objContext = {
    data:'From Controller',
    $implicit:'implicit value'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
