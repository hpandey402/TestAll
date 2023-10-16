import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingComponent } from './event-binding.component';

describe('EventBindingComponent', () => {
  let component: EventBindingComponent;
  let fixture: ComponentFixture<EventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Btn Click event check', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#btnClickId');
    expect(component.label).toBe('max')
    elem.click();
    expect(component.label).toBe('well')
  });
  it('cononical Btn Click event check', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#cononicalEventId');
    expect(component.label).toBe('max')
    elem.click();
    expect(component.label).toBe('MaxWEll')
  });

  it('Input default event check', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#inputEventId');
    expect(component.label).toBe('max');
    elem.dispatchEvent(new Event('input'));
    expect(component.label).toBe('Input value changed');
  });

  it('Check input event value', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#captureEventId');
    elem.value = 'sample';
    elem.dispatchEvent(new Event('input'));
    expect(component.label).toBe('sample');
  });

  it('check a method call on outer box click with event bubbling', ()=>{
    const outerBoxEmitterSpyOn = spyOn(component,'outerEmitter').and.callThrough();
    const elem = fixture.debugElement.nativeElement.querySelector('#outerEmitter');
    elem.click();
    expect(outerBoxEmitterSpyOn).toHaveBeenCalled();
    expect(component.label).toBe('outer box emitted');
  });

  it('event bubbling', ()=>{
    const outerBoxEmitterSpyOn = spyOn(component,'outerEmitter').and.callThrough();
    const innerBoxEmitterSpyOn = spyOn(component, 'innerEmitter').and.callThrough();
    const innerElem = fixture.debugElement.nativeElement.querySelector('#innerEmitter');
    innerElem.click();
    expect(innerBoxEmitterSpyOn).toHaveBeenCalledTimes(1);
    expect(outerBoxEmitterSpyOn).not.toHaveBeenCalled();
  });

  it('check keyup event', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#keyupId');
    const keyupEmitterSpyOn = spyOn(component, 'keyupEmitter').and.callThrough();
    elem.dispatchEvent(new KeyboardEvent('keyup'));
    expect(keyupEmitterSpyOn).toHaveBeenCalled();
  });

  it('check keyup event with enter', ()=>{
      const elem = fixture.debugElement.nativeElement.querySelector('#keyupEnterId');
      const keyupEmitterSpyOn = spyOn(component, 'keyupEmitter').and.callThrough();
      elem.dispatchEvent(new KeyboardEvent('keyup',{
        key:'enter'
      }));
      expect(keyupEmitterSpyOn).toHaveBeenCalledTimes(1);
    })
});
