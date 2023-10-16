import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  headingColor = 'font-red';
  age = 18;
  constructor() {
    setTimeout(()=>{
     this.headingColor = 'font-green';
     this.age = 25;
    }, 5000)
   }

  ngOnInit(): void {
  }

  changeHeadingColor(){

  }

}
