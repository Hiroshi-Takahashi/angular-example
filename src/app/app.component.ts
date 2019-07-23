import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'example';
  flg = false
  flg2 = false
  onchange() {
    this.flg = !this.flg
  }
  onchange2() {
    this.flg2 = !this.flg2
  }  
}
