import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingComponent } from './class-binding.component';

describe('ClassBindingComponent', () => {
  let component: ClassBindingComponent;
  let fixture: ComponentFixture<ClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ng class with property binding default check', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#headColor');
    expect(elem.getAttribute('class')).toContain('font-red');
  });

  it('ng class with property binding change heading color', ()=>{
    component.headingColor = 'font-green';
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('#headColor');
    expect(elem.getAttribute('class')).toContain('font-green');
  });

  it('ng class binding with ternary default', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#ternary');
    expect(elem.getAttribute('class')).toContain('font-green')
  });
  it('ng class bindng with ternary when value changes', ()=>{
     component.age = 25;
     fixture.detectChanges();
     const elem = fixture.debugElement.nativeElement.querySelector('#ternary');
     expect(elem.getAttribute('class')).toContain('font-red')
  });

  it('ng class binding with object default check', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#objectId');
    expect(elem.getAttribute('class')).toContain('font-green');
  });
  it('ng class binding with object when value changes', ()=>{
    component.age = 25;
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('#objectId');
    expect(elem.getAttribute('class')).not.toContain('font-green');
  });
});
