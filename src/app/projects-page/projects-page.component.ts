import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  show3dInfo = false;
  showMovedEvent = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  eventhandler(event: any) {
    console.log('in');
    if (event.toElement.id === 'movedEvent') {
      this.showMovedEvent = true;
      this.cdRef.detectChanges();
    }
  }

  handleLeave(event: any) {
    console.log('hit the wrong leave');
    console.log(event);
    if (event.fromElement.id === 'movedEvent') {
      console.log('went in and set it to false');
      this.showMovedEvent = false;
      this.cdRef.detectChanges();
    }
  }

}
