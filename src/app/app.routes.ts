import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { BookFinderComponent } from './book-finder/book-finder.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';

export var routes:Routes=[
    {
        path:'',
        component:MainAppComponent
    },  
    {
        path:'home',
        component:MainAppComponent
    },
    {
        path:'advsearch',
        component:BookFinderComponent
    },
    {
        path:'book',
        component:ProductPageComponent
    },
    {
        path:'books',
        component:ListOfBooksComponent
    },
  {
        path:'addBook',
        component: AddBookFormComponent
        
    }, 
    {
        path:'**',
        redirectTo:'/home'
    }

];
