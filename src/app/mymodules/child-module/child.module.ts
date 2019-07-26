import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './child-component/child-component.component';

// import { ExampleServiceService } from '../module1/example-service/example-service.service';

@NgModule({
  declarations: [ChildComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChildComponentComponent
  ]
})
export class Module1Module2 { }
