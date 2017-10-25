import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { BookFinderComponent } from './book-finder/book-finder.component';

export var routes:Routes=[
    {
        path:'home',
        component:MainAppComponent
    },
    {
        path:'advsearch',
        component:BookFinderComponent
    },
    {
        path:'',
        component:MainAppComponent
    },   
    {
        path:'**',
        redirectTo:'/home'
    }   
];