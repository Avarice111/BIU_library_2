import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { BookFinderComponent } from './book-finder/book-finder.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

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
        path:'addBook',
        component: AddBookFormComponent
        
    }, 
    {
        path:'shoppingCart',
        component: ShoppingCartComponent
    },
    {
        path:'**',
        redirectTo:'/home'
    }

];
