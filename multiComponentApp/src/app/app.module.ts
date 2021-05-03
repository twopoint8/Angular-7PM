import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { fullStack } from './fullstack.component';
import { meanStack } from './mean.component';
import { mernStack } from './mern.component';
import { mevnStack } from './mevn.component';

@NgModule({
  declarations: [
    AppComponent,
    meanStack,
    mernStack,
    mevnStack,
    fullStack
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [fullStack]
})
export class AppModule { }
