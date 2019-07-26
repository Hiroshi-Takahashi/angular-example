import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-parent-inner-component',
  templateUrl: './parent-inner-component.component.html',
  styleUrls: ['./parent-inner-component.component.sass']
})
export class ParentInnerComponentComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() {
    console.log("  parent-inner-component constructor")
  }
  ngOnChanges() {
    console.log("  parent-inner-component ngOnChanges")
  }
  ngOnInit() {
    console.log("  parent-inner-component ngOnInit")
  }
  ngDoCheck() {
    console.log("  parent-inner-component ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("  parent-inner-component AfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("  parent-inner-component AfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("  parent-inner-component AfterViewInit")
  }
  ngAfterViewChecked() {
    console.log("  parent-inner-component AfterViewChecked")
  }
  ngOnDestroy() {
    console.log("  parent-inner-component ngOnDestroy")
  }
}
