import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RegisterComponent} from './user-profile/register/register.component';
import {ChangePasswordComponent} from './user-profile/change-password/change-password.component';
import {LoginComponent} from './user-profile/login/login.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { BookFinderComponent } from './book-finder/book-finder.component';


export var routes:Routes=[
    {
        path:'',
        component:MainAppComponent,
        children:[
            {
                path:'',
                component:ListOfBooksComponent
            },
            {
                path:'book',
                component:ProductPageComponent
            },
            
            {
                path:'books',
                component:ListOfBooksComponent
            }
        ]
    },  
    {
        path:'home',
        redirectTo:''
    },
  {
    path:'profile',
    component:UserProfileComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'change-password',
    component:ChangePasswordComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
    {
        path:'advsearch',
        component:BookFinderComponent
    },
    {
        path:'**',
        redirectTo:'/home'
    },
    
];
