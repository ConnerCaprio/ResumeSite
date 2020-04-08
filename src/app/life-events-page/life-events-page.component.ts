import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-events-page',
  templateUrl: './life-events-page.component.html',
  styleUrls: ['./life-events-page.component.css']
})
export class LifeEventsPageComponent implements OnInit {
  showMovedEvent = false;
  photoStyle = '';
  photoPathArray = [
    { image: 'born', path: 'assets/img/bornPhoto.jpg', styling: '25' },
    { image: 'moved', path: 'assets/img/movedPhoto.JPG', styling: '45' },
    { image: 'joinedHockey', path: 'assets/img/joinedHockeyPhoto.JPG', styling: '160' },
    { image: 'eastLake', path: 'assets/img/eastLakePhoto.jpg', styling: '220' },
    { image: 'virginiaTech', path: 'assets/img/VTHockeyteam.jpg', styling: '650' },
    { image: 'graduates', path: 'assets/img/resume_photo.jpg', styling: '390' },
    { image: 'ventera', path: 'assets/img/venteraPhoto.jpg', styling: '470' }
  ]
  photoPath = 'assets/img/bornPhoto.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  eventhandler(event: any) {
    console.log(event);
    for (let lifeEvent of this.photoPathArray) {
      if (lifeEvent.image === event.toElement.id) {
        this.photoPath = lifeEvent.path;
        this.photoStyle = lifeEvent.styling;
        this.showMovedEvent = true;
        break;
      }
    }
  }

  handleLeave(event: any) {
    this.showMovedEvent = false;

  }

}
