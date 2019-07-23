import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Module } from '../module1/module1.module';
import { ExampleComponentComponent2 } from './example-component2/example-component2.component';

// import { ExampleServiceService } from '../module1/example-service/example-service.service';

@NgModule({
  declarations: [ExampleComponentComponent2],
  imports: [
    CommonModule,
    Module1Module
  ],
  exports: [
    ExampleComponentComponent2
  // ],
  // providers: [
  //   <Provider> { provide: ExampleServiceService, useClass: ExampleServiceService, multi: false }
  ]
})
export class Module1Module2 { }
