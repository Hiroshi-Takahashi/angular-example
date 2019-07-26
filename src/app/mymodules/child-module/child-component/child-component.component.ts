import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.sass']
})
export class ChildComponentComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() {
    console.log("    child-component constructor")
  }
  ngOnChanges() {
    console.log("    child-component ngOnChanges")
  }

  ngOnInit() {
    console.log("    child-component ngOnInit")
  }
  ngDoCheck() {
    console.log("    child-component ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("    child-component AfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("    child-component AfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("    child-component AfterViewInit")
  }
  ngAfterViewChecked() {
    console.log("    child-component AfterViewChecked")
  }
  ngOnDestroy() {
    console.log("    child-component ngOnDestroy")
  }

}
