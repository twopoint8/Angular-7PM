import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavaComponent } from './component/java.component';
import { UppercaseComponent } from './component/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
