import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalComponent } from './conditional.component';

describe('ConditionalComponent', () => {
  let component: ConditionalComponent;
  let fixture: ComponentFixture<ConditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cheking the if condition', ()=>{
      let elem:HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#grAgeTemp');
      expect(elem).toBeNull();
      component.age = 20;
      fixture.detectChanges();
      elem  = fixture.debugElement.nativeElement.querySelector('#grAgeTemp');
      expect(elem).not.toBeNull();
  });

  it('checking if condition in failure', ()=>{
    let elem:HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#lsAgeTemp');
    expect(elem).not.toBeNull();
  });

  it("checking then clause", ()=>{
    let elem = fixture.debugElement.nativeElement.querySelector('#thenClause');
    expect(elem).toBeNull();
    component.age = 20;
    fixture.detectChanges();
    elem = fixture.debugElement.nativeElement.querySelector('#thenClause');
    expect(elem).not.toBeNull()
  });

  it("checking else Clause", ()=>{
    let elem = fixture.debugElement.nativeElement.querySelector('#elseClause');
    expect(elem).not.toBeNull();
  });

  it("check the controller method as conditional rendering", ()=>{
    let elem = fixture.debugElement.nativeElement.querySelector('#controllerMethod');
    expect(elem).toBeNull();
    component.age = 20;
    fixture.detectChanges();
    elem = fixture.debugElement.nativeElement.querySelector('#controllerMethod');
    expect(elem).not.toBeNull();
  });

  it('should check for hidden id', ()=>{
    let elem = fixture.debugElement.nativeElement.querySelector('#hiddenId');
    expect(elem.hidden).toEqual(false);

    component.age = 20;
    fixture.detectChanges();
    elem= fixture.debugElement.nativeElement.querySelector('#hiddenId');
    expect(elem.hidden).toEqual(true);
  })

});
