import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('@Input default check', ()=>{
    const childElement = fixture.debugElement.nativeElement.querySelector('#childElementId');
    expect(childElement.innerHTML).toBe(`child works!: ${component.parentTitle}`);
  });

  it('Update parent value to render in child', ()=>{
    component.parentTitle = "parent updated";
    fixture.detectChanges();
    const childElement = fixture.debugElement.nativeElement.querySelector('#childElementId');
    expect(childElement.innerHTML).toBe(`child works!: ${component.parentTitle}`);
  });

  it('Meters value passed from two way binding to child component',(done)=>{
    fixture.whenStable().then(()=>{
      const elem = fixture.debugElement.nativeElement.querySelector('#metersInput');
      elem.value = 10;
      elem.dispatchEvent(new Event('input'));
      expect(component.metersModel).toEqual(10);
      fixture.detectChanges();
      const childElem = fixture.debugElement.nativeElement.querySelector('#childMetersId');
      expect(childElem.innerHTML).toBe('Meters into centimeters: 1000');
      done();
    })
  });

  it('When meters value is undefined',(done)=>{
    fixture.whenStable().then(()=>{
      const elem = fixture.debugElement.nativeElement.querySelector('#metersInput');
      elem.value = undefined;
      elem.dispatchEvent(new Event('input'));
      expect(component.metersModel).toEqual(null);
      fixture.detectChanges();
      const childElem = fixture.debugElement.nativeElement.querySelector('#childMetersId');
      expect(childElem.innerHTML).toBe('Meters into centimeters: 0');
      done();
    })
  })
});
