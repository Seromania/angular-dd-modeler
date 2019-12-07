import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ErsterComponent } from './erster/erster.component';
import { ZweiterComponent } from './zweiter/zweiter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ErsterComponent, ZweiterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
