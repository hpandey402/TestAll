import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingComponent } from './style-binding.component';

describe('StyleBindingComponent', () => {
  let component: StyleBindingComponent;
  let fixture: ComponentFixture<StyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('check ternary operator default Style binding', ()=>{
   const elem:HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector('#ternaryIdCheck');
   expect(elem.getAttribute('style')).toContain('color: red');
  });
  it('check Style binding when age value changes', ()=>{
    component.age = 18;
    fixture.detectChanges();
    const elem:HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector('#ternaryIdCheck');
    expect(elem.getAttribute('style')).toContain('color: blue');
   });

   it('check style binding for dynamic data', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#dynamicCheck');
    expect(elem.getAttribute('style')).toContain(`font-size: ${component.dynamicFontSize}`);
   });

   it('check style binding for dynamic data when dynamic data changes', ()=>{
    component.dynamicFontSize = '19px';
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('#dynamicCheck');
    expect(elem.getAttribute('style')).toContain(`font-size: 19px`);
   });

   it('check style binding for style property binding', ()=>{
    const elem= fixture.debugElement.nativeElement.querySelector('#styleBindId');
    expect(elem.getAttribute('style')).toContain('font-size: '+component.dynamicFontSizewithoutUnit+'px');
   })
});
