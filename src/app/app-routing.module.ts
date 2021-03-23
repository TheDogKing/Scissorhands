import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {UserComponent} from './user/user.component'
import {SettingComponent} from './setting/setting.component'
import {MainComponent} from './main/main.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'setting',component:SettingComponent},
  {path:'main',component:MainComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
