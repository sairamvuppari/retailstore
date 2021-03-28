import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { ManagementComponent } from 'src/app/dashboard/management/management.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';
import { HomeModule } from 'src/app/home/home.module';
import { LoginModule } from 'src/app/login/login.module';

@NgModule({
  declarations: [DefaultComponent, ManagementComponent],
  imports: [
    CommonModule, FormsModule, RouterModule , HomeModule, LoginModule, FlexLayoutModule, TabsModule.forRoot(),SidebarModule.forRoot()
  ]
})
export class DefaultModule { }
