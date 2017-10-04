import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    ListOfBooksComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
