import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ExampleServiceService } from '../example-service/example-service.service'

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.sass']
})
export class ExampleComponentComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  _exampleServiceService;
  constructor( private exampleServiceService: ExampleServiceService ) {
    console.log("example-component constructor")
    this._exampleServiceService = exampleServiceService
  }
  onchange() {
    console.log("onchange")
  }
  ngOnChanges() {
    console.log("example-component ngOnChanges")
  }

  ngOnInit() {
    console.log("example-component ngOnInit")
  }
  doClick() {
    this._exampleServiceService.example()
  }
  ngDoCheck() {
    // console.log("example-component ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("example-component AfterContentInit")
  }
  ngAfterContentChecked() {
    // console.log("example-component AfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("example-component AfterViewInit")
  }
  ngAfterViewChecked() {
    // console.log("example-component AfterViewChecked")
  }
  ngOnDestroy() {
    console.log("example-component ngOnDestroy")
  }

}
