import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOutputComponent } from './parent-output.component';
import { ChildOutputComponent } from '../child-output/child-output.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ParentOutputComponent', () => {
  let component: ParentOutputComponent;
  let fixture: ComponentFixture<ParentOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentOutputComponent,ChildOutputComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('h1 tag should be updated when child sends data', (done)=>{
    fixture.whenStable().then(()=>{
      const childDebugElement = fixture.debugElement.query(By.css('app-child-output')); //In order to get reference of Child comp
      const elem = fixture.debugElement.nativeElement.querySelector('#inputChildId');
      elem.value = 'test data';
      elem.dispatchEvent(new Event('input'));
      expect(childDebugElement.context.dataModel).toBe('test data');
      const btnElem = fixture.debugElement.nativeElement.querySelector('#btnID');
      btnElem.click();
      expect(component.childData).toBe('test data');
      fixture.detectChanges();
      const outputElem = fixture.debugElement.nativeElement.querySelector('#outputId');
      expect(outputElem.innerHTML).toBe('Output Decorator - test data');
      done();
    })
  })
});
