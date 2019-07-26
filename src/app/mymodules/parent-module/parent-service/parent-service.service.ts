import { Injectable } from '@angular/core';

@Injectable()
export class ParentServiceService {

  private a;
  constructor() { 
    console.log("ParentServiceService constructor")
    this.a = new Date().getTime();
    console.log(this.a)
  }

  example() {
    console.log(this.a)
  }
}
