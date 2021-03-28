import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { FormsModule } from '@angular/forms';
import { UserAccountComponent } from './dashboard/user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, DefaultModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
