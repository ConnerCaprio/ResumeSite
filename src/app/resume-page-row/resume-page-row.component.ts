import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-page-row',
  templateUrl: './resume-page-row.component.html',
  styleUrls: ['./resume-page-row.component.css']
})
export class ResumePageRowComponent implements OnInit {
  row: number;
  backgroundColor = 'maroon';
  one = true;
  two = false;
  three = false;
  four = false;
  five = false;

  @Input()
  set assignRow(row: number) {
    this.row = row;
    this.changeData();
  }

  constructor() { }

  ngOnInit(): void { }

  changeData() {
    if (this.row === 1) {
      this.one = true;
    } else if (this.row === 2) {
      this.two = true;
      this.backgroundColor = 'darkviolet';
    } else if (this.row === 3) {
      this.three = true;
      this.backgroundColor = 'mediumblue';
    } else if (this.row === 4) {
      this.four = true;
      this.backgroundColor = 'darkorange';
    } else {
      this.five = true;
    }
  }
}
