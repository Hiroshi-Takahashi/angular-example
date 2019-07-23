import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponentComponent } from './example-component/example-component.component';

import { ExampleServiceService } from './example-service/example-service.service';

@NgModule({
  declarations: [ExampleComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleComponentComponent
  ],
  providers: [
    <Provider> { provide: ExampleServiceService, useClass: ExampleServiceService, multi: false }
  ]
})
export class Module1Module { }
