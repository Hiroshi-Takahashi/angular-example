import { Injectable } from '@angular/core';

@Injectable()
export class ExampleServiceService {

  private a;
  constructor() { 
    console.log("ExampleServiceService constructor")
    this.a = new Date().getTime();
    console.log(this.a)
  }

  example() {
    console.log(this.a)
  }
}
