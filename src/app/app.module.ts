import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http' ;

import { AppComponent } from './app.component';
import { TestItemsComponent } from './test-items/test-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TestItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
