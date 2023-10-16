import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForComponent } from './ng-for.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NgForComponent', () => {
  let component: NgForComponent;
  let fixture: ComponentFixture<NgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("test sample array", ()=>{
     const elems:DebugElement[] = fixture.debugElement.queryAll(By.css('.sampleArray'));
     expect(elems.length).toEqual(component.names.length);
     elems.forEach((obj:DebugElement, index:number)=>{
      expect(obj.children[0].nativeElement.innerHTML).toBe(component.names[index]);
     }) 
  });

  it("testing complex array", ()=>{
     const elems: DebugElement[] = fixture.debugElement.queryAll(By.css('.complexArr'));
     expect(elems.length).toEqual(component.complexArr.length)
     elems.forEach((obj:DebugElement, index:number)=>{
       expect(obj.children[0].nativeElement.innerHTML).toEqual(`${component.complexArr[index].id} - ${component.complexArr[index].name}`);
     })
  });

  it("testing complex array properties", ()=>{
    const elems:DebugElement[] = fixture.debugElement.queryAll(By.css('.complexArrProps'));
    expect(elems.length).toEqual(component.complexArr.length);
    elems.forEach((obj:DebugElement, index:number)=>{
      let value = `index - ${index} - isFirst - ${index ==0 ? true : false} - isLast - ${index==elems.length-1 ? true : false} - isEven - ${index % 2 == 0 ? true : false} - isOdd - ${index % 2 !== 0 ? true : false}`;
      expect(obj.children[0].nativeElement.innerHTML).toEqual(value)
    })
  });

  it("testing ng-container for ngFor", ()=>{
    const elems: DebugElement[] = fixture.debugElement.queryAll(By.css('.containerClass'));
    expect(elems.length).toEqual(component.complexArr.length);
    elems.forEach((obj:DebugElement, index:number)=>{
      expect(obj.nativeElement.innerHTML).toEqual(`${component.complexArr[index].id} - ${component.complexArr[index].name}`);
    })
  });

  it("dynamic Change complex array", ()=>{
    expect(component.complexArr.length).toEqual(3);
    let btnElem:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#buttonAdd');
    btnElem.click();
    fixture.detectChanges();
    expect(component.complexArr.length).toEqual(4);
    const elems: DebugElement[] = fixture.debugElement.queryAll(By.css('.complexArr'));
    expect(elems.length).toEqual(component.complexArr.length)
    elems.forEach((obj:DebugElement, index:number)=>{
      expect(obj.children[0].nativeElement.innerHTML).toEqual(`${component.complexArr[index].id} - ${component.complexArr[index].name}`);
    })
  })
});
