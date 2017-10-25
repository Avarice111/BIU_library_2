import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';


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
        path:'**',
        redirectTo:'/home'
    },
    {
        path:'addBook',
        component: AddBookFormComponent
        
    }

];
