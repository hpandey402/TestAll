import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingComponent } from './attribute-binding.component';

describe('AttributeBindingComponent', () => {
  let component: AttributeBindingComponent;
  let fixture: ComponentFixture<AttributeBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Button aria-label with attribute binding', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#btnAttr');
    expect(elem.getAttribute('aria-label')).toBe(component.ariaLabelDynamic);
  });

  it('Button aria-label with attribute binding when dynamic value changes', ()=>{
    component.ariaLabelDynamic = "Updated Close";
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('#btnAttr');
    expect(elem.getAttribute('aria-label')).toBe('Updated Close');
  });

  it('Input data-widget attr check', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#customAttrId');
    expect(elem.getAttribute('data-widget')).toBe(component.widgetDynamic);
    expect(elem.value).toBe('sample');
    expect(elem.getAttribute('value')).toBe('sample');
    expect(elem['data-widget']).toBeUndefined();
  });

  it('Attribute binding check for rowspan', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#rowspan-check');
    expect(+elem.getAttribute('rowspan')).toEqual(component.rowSpanCount);
    expect(elem.rowspan).toBeUndefined();
  })
});
