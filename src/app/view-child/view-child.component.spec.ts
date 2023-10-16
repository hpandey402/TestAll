import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildComponent } from './view-child.component';
import { By } from '@angular/platform-browser';
import { ChildComponent } from '../child/child.component';

fdescribe('ViewChildComponent', () => {
  let component: ViewChildComponent;
  let fixture: ComponentFixture<ViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildComponent, ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('View child check on first ref', ()=>{
    // const elem = fixture.debugElement.query(By.css('#firstElement'));
    // console.log("chcckc", elem.nativeElement.activeElement);
    expect(document.activeElement?.id).toEqual('firstElement');
    expect(document.activeElement?.id).not.toEqual('secondElement')
  });

  it('on load paragraph should be red color', ()=>{
    const elem = fixture.debugElement.query(By.css('#paraElement'));
    expect(elem.nativeElement.style.color).toBe('red')
  });

  it('change child title from parent using view child', ()=>{
    component.changeChildTitle();
    const childDebugElement = fixture.debugElement.query(By.css('app-child'));
    expect(childDebugElement.context.title).toBe('New Title');
  });

  it('change child title form accessing the method of child component', ()=>{
    const childMethod = spyOn(component,'accessChildMethod').and.callThrough();
    const elem = fixture.debugElement.nativeElement.querySelector('#accessId');
    elem.click();
    expect(childMethod).toHaveBeenCalled();
    const childDebugElement = fixture.debugElement.query(By.css('app-child'));
    expect(childDebugElement.context.title).toBe('updated Title');
  })
});
