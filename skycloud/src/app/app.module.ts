import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {FileService} from './services/file.service';

import { DashhomeComponent } from './components/dashboard/dashhome/dashhome.component';
import { DocumentsComponent } from './components/dashboard/documents/documents.component';
import { AudiosComponent } from './components/dashboard/audios/audios.component';
import { VideosComponent } from './components/dashboard/videos/videos.component';
import { ImagesComponent } from './components/dashboard/images/images.component';
import { ZipsComponent } from './components/dashboard/zips/zips.component';
import { OthersComponent } from './components/dashboard/others/others.component';
import { DriveinfoComponent } from './components/dashboard/driveinfo/driveinfo.component';


const appRoutes: Routes =  [
  {path: '' , component : HomeComponent} ,
  {path: 'register' , component : RegisterComponent} ,
  {path: 'login' , component : LoginComponent} ,
  {path: 'dashboard' , component: DashboardComponent } ,
  {path: 'profile' , component : ProfileComponent }
];
//  canActivate: [AuthGuard]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    DashhomeComponent,
    DocumentsComponent,
    AudiosComponent,
    VideosComponent,
    ImagesComponent,
    ZipsComponent,
    OthersComponent,
    DriveinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, AuthGuard, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
