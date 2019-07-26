import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@NgModule({
  declarations: [ParentComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponentComponent
  ]
})
export class ParentModule { }
