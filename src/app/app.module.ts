import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { MenuComponent } from './menu/menu.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { HeaderComponent } from './header/header.component';
import { MenuListOfBooksComponent } from './menu-list-of-books/menu-list-of-books.component';
import {BooksCategoriesService} from './menu-list-of-books/BooksCategoriesService';
import { ThrobberComponent } from './throbber/throbber.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    MenuComponent,
    ListOfBooksComponent,
    HeaderComponent,
    MenuListOfBooksComponent,
    ThrobberComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
