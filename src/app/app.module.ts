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
import { UserManagementService } from './services/user-management.service';
import { SearchComponent} from './components/search/search.component';
import { SearchService} from './services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    LoginComponent,
    UserComponent,
    UserManagementComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [SlidebarService,GetphotoService,LoginService,AuthguardGuard,UserManagementService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
