import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.sass']
})
export class ParentComponentComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() {
    console.log("parent-component constructor")
  }
  onchange() {
    console.log("onchange")
  }
  ngOnChanges() {
    console.log("parent-component ngOnChanges")
  }

  ngOnInit() {
    console.log("parent-component ngOnInit")
  }
  ngDoCheck() {
    console.log("parent-component ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("parent-component AfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("parent-component AfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("parent-component AfterViewInit")
  }
  ngAfterViewChecked() {
    console.log("parent-component AfterViewChecked")
  }
  ngOnDestroy() {
    console.log("parent-component ngOnDestroy")
  }
}
