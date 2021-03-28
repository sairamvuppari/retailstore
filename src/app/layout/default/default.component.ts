import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  opened = false;
  constructor(private router: Router, @Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    $('.sidebar-dropdown > a').click(function() {
      $('.sidebar-submenu').slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass('active')
      ) {
        $('.sidebar-dropdown').removeClass('active');
        $(this)
          .parent()
          .removeClass('active');
      } else {
        $('.sidebar-dropdown').removeClass('active');
        $(this)
          .next('.sidebar-submenu')
          .slideDown(200);
        $(this)
          .parent()
          .addClass('active');
      }
    });
  }
  toggleOpened() {
    this.opened = !this.opened;
    const ele = document.getElementById('main-contents');
    if (this.opened) {
      ele.style.marginLeft = '250px';
    } else {
      ele.style.marginLeft = '0px';
    }
  }
  logout() {
    this.router.navigate(['/']);
  }

}
