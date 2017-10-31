import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { GetphotoService } from './services/getphoto.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LoginService } from './services/login.service';
import {AuthguardGuard} from './authguard.guard';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModule } from 'ng-sidebar';
import { SlidebarService } from './services/slidebar.service';
<<<<<<< HEAD
import { SearchService } from './services/search.service';
import { SearchComponent } from './components/search/search.component';
=======
import { UserManagementService } from './services/user-management.service';
>>>>>>> 468a614a29745057f55c07dfeccd428af9318033

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
<<<<<<< HEAD
    SearchComponent,
=======
    LoginComponent,
    UserComponent,
    UserManagementComponent,
>>>>>>> 468a614a29745057f55c07dfeccd428af9318033
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
<<<<<<< HEAD
  providers: [SlidebarService,SearchService],
=======
  providers: [SlidebarService,GetphotoService,LoginService,AuthguardGuard,UserManagementService],
>>>>>>> 468a614a29745057f55c07dfeccd428af9318033
  bootstrap: [AppComponent]
})
export class AppModule { }
