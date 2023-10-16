import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingComponent } from './property-binding.component';

describe('PropertyBindingComponent', () => {
  let component: PropertyBindingComponent;
  let fixture: ComponentFixture<PropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check input default property bindings', ()=>{
    const elem:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#inputField');
    expect(elem.type).toBe(component.inputType);
    expect(elem.placeholder).toBe(component.inputPlaceholder);
    expect(elem.readOnly).toBeFalse();
  });
  it('change property binding values and check the elem properties',()=>{
    component.inputType = 'text';
    component.inputPlaceholder = "updated placeholder";
    component.a = 30;
    component.b = 10;
    fixture.detectChanges();
    const elem:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#inputField');
    expect(elem.type).toBe('text');
    expect(elem.placeholder).toBe('updated placeholder');
    expect(elem.readOnly).toBeTruthy();
  });

  it("check property binding on second input", ()=>{
    component.inputType = "email";
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('#secInputField');
    expect(elem.type).toBe(component.getType());
    expect(elem.type).toBe('email');

  })
});
