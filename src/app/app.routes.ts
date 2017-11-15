import {Routes} from '@angular/router';
import {MainAppComponent} from './main-app/main-app.component';
import {BookPageComponent} from './book-page/book-page.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RegisterComponent} from './user-profile/register/register.component';
import {ChangePasswordComponent} from './user-profile/change-password/change-password.component';
import {LoginComponent} from './user-profile/login/login.component';
import {ListOfBooksComponent} from './list-of-books/list-of-books.component';
import {BookFinderComponent} from './book-finder/book-finder.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {MessageDetailsComponent} from './message-details/message-details.component';
import {ListOfMessagesComponent} from './list-of-messages/list-of-messages.component';
import {AddBookFormComponent} from './add-book-form/add-book-form.component';


export let routes: Routes = [
  {
    path: '',
    component: MainAppComponent,
    children: [
      {
        path: '',
        component: ListOfBooksComponent
      },
      {
        path: 'book/:bookid',
        component: BookPageComponent
      },
      {
        path: 'message/:messageid',
        component: MessageDetailsComponent
      },

      {
        path: 'messages',
        component: ListOfMessagesComponent
      },
      {
        path: 'books/:category',
        component: ListOfBooksComponent
      },
      {
        path: 'shoppingCart',
        component: ShoppingCartComponent
      },
      {
        path: 'advsearch',
        component: BookFinderComponent

      }
    ]
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-book',
    component: AddBookFormComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  },

];
