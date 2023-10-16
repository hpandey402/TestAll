import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
 @ViewChild('sample') element!: ElementRef;
 @ViewChild('changeStyles') paraElement!: ElementRef;
 @ViewChild('childRef') childElem!: ChildComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.element.nativeElement.focus();
    this.paraElement.nativeElement.style.color = 'red';
  }

  changeChildTitle(){
    this.childElem.title = 'New Title';
  }
  accessChildMethod(){
    this.childElem.changeTitle('updated Title');
  }

}
