import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ExampleServiceService } from '../../module1/example-service/example-service.service'

@Component({
  selector: 'app-example-component2',
  templateUrl: './example-component2.component.html',
  styleUrls: ['./example-component2.component.sass']
})
export class ExampleComponentComponent2 implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  _exampleServiceService;
  constructor( private exampleServiceService: ExampleServiceService ) {
    console.log("example-component2 constructor")
    this._exampleServiceService = exampleServiceService
  }
  onchange() {
    console.log("onchange")
  }
  ngOnChanges() {
    console.log("example-component2 ngOnChanges")
  }

  ngOnInit() {
    console.log("example-component2 ngOnInit")
  }
  doClick() {
    this._exampleServiceService.example()
  }
  ngDoCheck() {
    // console.log("example-component2 ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("example-component2 AfterContentInit")
  }
  ngAfterContentChecked() {
    // console.log("example-component2 AfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("example-component2 AfterViewInit")
  }
  ngAfterViewChecked() {
    // console.log("example-component2 AfterViewChecked")
  }
  ngOnDestroy() {
    console.log("example-component2 ngOnDestroy")
  }

}
