import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'American Retails';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onclicklogin() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
