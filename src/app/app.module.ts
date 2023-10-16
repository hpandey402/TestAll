import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    ConditionalComponent,
    NgForComponent,
    TemplateOutletComponent,
    TwoWayBindingComponent,
    ChildComponent,
    ParentComponent,
    ChildOutputComponent,
    ParentOutputComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
