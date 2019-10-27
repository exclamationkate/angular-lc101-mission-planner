import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', occupation: 'Physicist', missions: 2},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', occupation: 'Physician, Engineer and Professor', missions: 1},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', occupation: 'Director', missions: 4},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', occupation: 'Test Pilot', missions: 3},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', occupation: 'Fighter Pilot and Engineer', missions: 4},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', occupation: 'Flight Surgeon', missions: 3},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', occupation: 'Technical Intelligence Officer', missions: 0}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(member) {
    if (!this.crew.includes(member) && this.crew.length < 3) {
      this.crew.push(member);
    } else if (this.crew.includes(member)){
      let index = this.crew.indexOf(member);
      this.crew.splice(index, 1);
    }
  }

}
