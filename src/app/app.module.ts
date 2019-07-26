import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParentModule } from './mymodules/parent-module/parent.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
