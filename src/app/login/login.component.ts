import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [UsersService]
})
export class LoginComponent implements OnInit {
  disablelogin: boolean = true;
  selectedJob: any;
  phoneno: any;
  emailid: any;
  passwd: any;
  constructor(private router: Router, public registeruserservice: LoginService) { }

  ngOnInit(): void {
  }
  user_login() {
    if (this.emailid == 'admin' && this.passwd == '1234') {
      this.router.navigate(['app/management'], { replaceUrl: true });
    }
    else {
      this.router.navigate(['app/user'], { replaceUrl: true });
    }
  }
  bo_login(e) {
    this.disablelogin = false;
    // var username = e.target.elements[0].value;
    // var password = e.target.elements[1].value;
    // console.log(username, password);

    // if (username == "admin" && password == "admin") {

    // }
  }
  register_form() {
    this.disablelogin = !this.disablelogin;
  }
  // async submitusers() {
  //   console.log(this.username, this.emailID, this.phoneno, this.selectedJob);
  //   await this.registeruserservice.registeruser(this.username, this.emailID, this.phoneno, this.selectedJob).then(response => {
  //   });
  // }
  telInputObject(e) {

  }
  onCountryChange(e) {

  }
  getNumber(e) {

  }
  hasError(e) {

  }
}
