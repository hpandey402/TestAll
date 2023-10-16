import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingComponent } from './two-way-binding.component';
import { FormsModule } from '@angular/forms';

describe('TwoWayBindingComponent', () => {
  let component: TwoWayBindingComponent;
  let fixture: ComponentFixture<TwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBindingComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('update the model value from controller', (done)=>{
    component.modelTest = "Updated Value";
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const elem = fixture.debugElement.nativeElement.querySelector('#inputId');
      expect(elem.value).toBe('Updated Value');
      done();
    })
  });

  it('update input field and check modelTest value', (done)=>{
    fixture.whenStable().then(()=>{
      const elem = fixture.debugElement.nativeElement.querySelector('#inputId');
      elem.value = 'Update Input Field';
      elem.dispatchEvent(new Event('input'));
      expect(component.modelTest).toBe(elem.value);
      fixture.detectChanges();
      const paraElem = fixture.debugElement.nativeElement.querySelector('#paraId');
      expect(paraElem.innerHTML).toBe('Update Input Field');
      done();
    })
  });

  it('check the value of getModelValue method',()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#inputId');
    elem.value = 'updated max';
    elem.dispatchEvent(new Event('input'));
    expect(component.modelTest).toBe('updated max');
    expect(component.getModelValue()).toBe('updated max');
  })

  it('check the setModelValue method', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#setModelId');
    elem.click();
    expect(component.modelTest).toBe('Updated the model value to max');
    fixture.detectChanges();
    const paraElem = fixture.debugElement.nativeElement.querySelector('#paraId');
    expect(paraElem.innerHTML).toBe('Updated the model value to max');
  })
});
