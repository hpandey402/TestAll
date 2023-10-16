import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletComponent } from './template-outlet.component';

describe('TemplateOutletComponent', () => {
  let component: TemplateOutletComponent;
  let fixture: ComponentFixture<TemplateOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('container with context data', ()=>{
    const headingElement = fixture.debugElement.nativeElement.querySelector('#headingIdcontextId1');
    const paraElement = fixture.debugElement.nativeElement.querySelector('#paraIdcontextId1');
    expect(headingElement).toBeTruthy();
    expect(paraElement.innerHTML).toBe('');
    expect(headingElement.innerHTML).toBe('Hi');
  });

  it('container with implicit and context data', ()=>{
   const headingElement = fixture.debugElement.nativeElement.querySelector('#headingIdcontextId2');
   const paraElement = fixture.debugElement.nativeElement.querySelector('#paraIdcontextId2');
   expect(paraElement).toBeTruthy();
   expect(headingElement).toBeTruthy();
   expect(paraElement.innerHTML).toBe('Test');
   expect(headingElement.innerHTML).toBe('How are you?');
  });

  it('should test ngTemplateOutlet inside div', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#divElement');
    expect(elem.children[0]).toBeTruthy();
    expect(elem.children[0].innerHTML).toBe('');
    expect(elem.children[1]).toBeTruthy();
    expect(elem.children[1].innerHTML).toBe('Some external data')
  });

  it('should test dynamic value from controller for context of ngTemplateOutlet', ()=>{
    const elem:HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#dynamicId');
    expect(elem.children.length).toEqual(2);
    expect(elem.children[0].innerHTML).toEqual(component.objContext.$implicit);
    expect(elem.children[1].innerHTML).toBe(component.objContext.data);
  });

});
