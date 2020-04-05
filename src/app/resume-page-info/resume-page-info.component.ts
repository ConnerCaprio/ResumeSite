import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-page-info',
  templateUrl: './resume-page-info.component.html',
  styleUrls: ['./resume-page-info.component.css']
})
export class ResumePageInfoComponent implements OnInit {
  row: number;
  firstRow = false;

  ventera = 'Worked on Calvin, fixed STARS code smells, worked as only fulltime developer for SNAPQCS application';
  VT = 'Graduated from Virginia Tech in 2019 with a BS in Computer Science';
  projects = 'Made this freaking site, learned how to design and 3d print, made a magic mirror';
  languages = '.net, angular, C++, java, javascript, C, html, css';
  description = '';

  @Input()
  set assignRow(row: number) {
    this.row = row;
    this.changeData();
  }

  constructor() { }

  ngOnInit(): void { }

  changeData() {
    if (this.row === 1) {
      this.description = 'Conner Caprio';
      this.firstRow = true;
    } else if (this.row === 2) {
      this.description = this.ventera;
    } else if (this.row === 3) {
      this.description = this.VT;
    } else if (this.row === 4) {
      this.description = this.projects;
    } else if (this.row === 5) {
      this.description = this.languages;
    }
  }
}
