import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { MenuComponent } from './menu/menu.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { HeaderComponent } from './header/header.component';
import {BooksCategoriesService} from './menu-list-of-books/BooksCategoriesService';
import {BooksCategoriesService} from '../view-models/BooksCategoriesService';

import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { ThrobberComponent } from './throbber/throbber.component';
import { BookFinderComponent } from './book-finder/book-finder.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { routes } from './app.routes';
import { LoginComponent } from './user-profile/login/login.component';
import { RegisterComponent } from './user-profile/register/register.component';
import { ChangePasswordComponent } from './user-profile/change-password/change-password.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { TableOfContentsComponentComponent } from './book-page/table-of-contents-component/table-of-contents-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    MenuComponent,
    ListOfBooksComponent,
    HeaderComponent,
    ProductPageComponent,
    MenuListOfBooksComponent,
    AddBookFormComponent,
    ThrobberComponent,
    BookFinderComponent,
    ContactFormComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ShoppingCartComponent,
    TableOfContentsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BooksCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
