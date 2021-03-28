import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule, CommonModule, HttpClientModule,RouterModule 
  ],
  declarations: [LoginComponent],
  providers: [LoginService],
  exports: []
})
export class LoginModule { }
