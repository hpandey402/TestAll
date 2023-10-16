import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture : ComponentFixture<AppComponent>
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('heading Interpolation', ()=>{
    const elem = fixture.debugElement.nativeElement.querySelector('#sampleinterpolation');
    expect(elem).toBeTruthy();
    expect(elem.innerHTML).toBe('interpolation heading');
    component.heading = "Hemant Updated";
    fixture.detectChanges();
    expect(elem.innerHTML).toBe('Hemant Updated');
  });

  it('incomeCheck Interpolation', ()=>{
    component.income = 5000;
    component.expenditure = 1000;
    fixture.detectChanges();
     const elem = fixture.debugElement.nativeElement.querySelector('#incomeCheck');
     expect(elem).toBeTruthy();
     expect(+elem.innerHTML).toEqual(4000);
  });

  it('ternaryCheck interpolation', ()=>{
    component.income = 5000;
    component.expenditure = 1000;
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('#ternaryCheck');
    expect(elem.innerHTML).toBe('Profit');
  });

  it('inputCheck interpolation', ()=>{
    const elem:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#inputCheck');
    expect(elem.type).toBe(component.metaData.typeValue);
    expect(elem.readOnly).toBeFalsy();
    component.metaData.typeValue = 'password';
    fixture.detectChanges();
    expect(elem.type).toBe('password');
  });

  it('methodCheck Interpolation', ()=>{
    const elem:HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector('#methodCheck');
    expect(elem.innerHTML).toBe(component.getName());
  });

});
