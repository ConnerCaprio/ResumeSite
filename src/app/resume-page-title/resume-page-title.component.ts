import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-page-title',
  templateUrl: './resume-page-title.component.html',
  styleUrls: ['./resume-page-title.component.css']
})
export class ResumePageTitleComponent implements OnInit {
  isText = true;
  title = '';

  @Input()
  set assignRow(row: number) {
    this.row = row;
    this.changeData();
  }

  row: number;

  constructor() { }

  ngOnInit(): void { }

  changeData() {
    if (this.row === 1) {
      this.isText = false;
    } else if (this.row === 2) {
      this.isText = true;
      this.title = 'Ventera';
    } else if (this.row === 3) {
      this.isText = true;
      this.title = 'Virginia Tech';
    } else if (this.row === 4) {
      this.isText = true;
      this.title = 'Projects';
    } else {
      this.isText = true;
      this.title = 'Languages';
    }
  }
}
