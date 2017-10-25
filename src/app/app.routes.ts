import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';


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
    }
];