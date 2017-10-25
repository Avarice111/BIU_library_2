import {Routes} from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RegisterComponent} from './user-profile/register/register.component';
import {ChangePasswordComponent} from './user-profile/change-password/change-password.component';
import {LoginComponent} from './user-profile/login/login.component';


export var routes:Routes=[
    {
        path:'home',
        component:MainAppComponent
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
        path:'',
        component:MainAppComponent
    },
    {
        path:'**',
        redirectTo:'/home'
    }
];
