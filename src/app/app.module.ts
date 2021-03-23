import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    MainComponent,
    SettingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,MenubarModule,BrowserAnimationsModule,PasswordModule,InputTextModule,FormsModule,ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
