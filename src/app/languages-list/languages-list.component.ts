import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent implements OnInit {

  searchName = '';

  languagesOne = [
    { id: 1, name: 'Java', search: true },
    { id: 2, name: 'Linux', search: false },
    { id: 3, name: 'Unity', search: true },
    { id: 4, name: 'Autodesk Inventor 3D CAD', search: true },
    { id: 5, name: 'MATLAB', search: true },
    { id: 6, name: 'React', search: true },
    { id: 7, name: 'C++', search: true },
    { id: 8, name: 'C', search: true },
    { id: 9, name: 'C#', search: true },
    { id: 10, name: 'G&M Code', search: true },
    { id: 11, name: 'Angular 7', search: true },
    { id: 9, name: 'Arduino', search: true },
    { id: 9, name: 'Rasbian', search: true }
  ];

  languagesTwo = [
    { id: 10, name: 'Swift', search: true },
    { id: 11, name: 'Python', search: true },
    { id: 12, name: 'Javascript', search: true },
    { id: 13, name: 'AngularJS', search: true },
    { id: 14, name: 'HTML', search: true },
    { id: 15, name: 'CSS', search: true },
    { id: 16, name: '3D Printing', search: true },
    { id: 17, name: 'Assembly', search: true },
    { id: 18, name: 'Lisp', search: true },
    { id: 19, name: 'Creality Slicing Software', search: true },
    { id: 20, name: 'PHP', search: true },
    { id: 21, name: 'REGEX', search: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateServerName(event: any) {
    this.searchName = (<HTMLInputElement>event.target).value;
    this.updateSearchWord();
  }

  updateSearchWord() {
    this.languagesOne.forEach(element => {
      if (element.name.toLowerCase().includes(this.searchName.toLowerCase())) {
        element.search = true;
      } else {
        element.search = false;
      }
    });
    this.languagesTwo.forEach(element => {
      if (element.name.toLowerCase().includes(this.searchName.toLowerCase())) {
        element.search = true;
      } else {
        element.search = false;
      }
    });
  }

}
