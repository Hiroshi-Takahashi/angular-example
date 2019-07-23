import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Module1Module } from './exmodule/module1/module1.module';
import { Module1Module2 } from './exmodule/module2/module2.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    Module1Module2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
