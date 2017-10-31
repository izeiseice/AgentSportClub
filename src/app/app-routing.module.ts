import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchComponent } from './components/search/search.component';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import {AuthguardGuard} from './authguard.guard';

const routes: Routes = [
<<<<<<< HEAD
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent }
=======
    {path: '',component: LoginComponent},
  {path: 'home',canActivate: [AuthguardGuard],component: HomeComponent},
  {path: 'user',canActivate: [AuthguardGuard],component: UserComponent},
  {path: 'menu',canActivate: [AuthguardGuard],component: MenuComponent},
  {path: 'user-management',canActivate: [AuthguardGuard],component: UserManagementComponent},
  {path: '**',canActivate: [AuthguardGuard],component: LoginComponent}
>>>>>>> 468a614a29745057f55c07dfeccd428af9318033
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
