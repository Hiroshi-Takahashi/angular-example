import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModule } from '../child-module/child.module';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ParentInnerComponentComponent } from './parent-inner-component/parent-inner-component.component';

@NgModule({
  // モジュール内で定義したコンポーネント
  declarations: [ParentComponentComponent, ParentInnerComponentComponent],
  // モジュール内部で利用する他のモジュール
  imports: [
    CommonModule,
    ChildModule
  ],
  // モジュール外部で利用するコンポーネント
  exports: [
    ParentComponentComponent, ParentInnerComponentComponent
  ]
})
export class ParentModule { }
