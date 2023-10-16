import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOutputComponent } from './child-output.component';
import { FormsModule } from '@angular/forms';

describe('ChildOutputComponent', () => {
  let component: ChildOutputComponent;
  let fixture: ComponentFixture<ChildOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOutputComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
