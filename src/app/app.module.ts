import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitalComponent } from './components/digital/digital.component';
import { AnalogComponent } from './components/analog/analog.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalComponent,
    AnalogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
