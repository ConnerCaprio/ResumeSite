import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router) { }
  route = '';
  selected = 0;

  ngOnInit(): void {
    console.log(this.router.url + ' hereeee');
    console.log(window.location.href + 'thereesss');

    this.route = window.location.href;
    switch (this.route) {
      case 'http://localhost:4200/':
        this.selected = 1;
        break;
      case 'http://localhost:4200/resume':
        this.selected = 2;
        break;
      case 'http://localhost:4200/lifeEvents':
        this.selected = 3;
        break;
      default:
        this.selected = 1;
    }


  }





}
