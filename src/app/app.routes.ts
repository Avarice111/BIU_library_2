import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';


export var routes:Routes=[
    {
        path:'home',
        component:MainAppComponent
    },
    {
        path:'',
        component:MainAppComponent
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
        path:'**',
        redirectTo:'/home'
    },
    
];