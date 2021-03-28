import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { ManagementComponent } from './dashboard/management/management.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserAccountComponent } from './dashboard/user-account/user-account.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'app',
    component: DefaultComponent,
    children: [{
      path: 'management',
      component: ManagementComponent
    },
    {
      path: 'user',
      component: UserAccountComponent
    }]
  }, {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
