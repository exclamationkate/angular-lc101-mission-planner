import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  experimentsToDo: string[] = [];

  constructor() { }

  ngOnInit() { }

  addExperiment(experiment) {
    if (!this.experimentsToDo.includes(experiment)) {
      this.experimentsToDo.push(experiment);
    } else if (this.experimentsToDo.includes(experiment)) {
      let index = this.experimentsToDo.indexOf(experiment);
      this.experimentsToDo.splice(index, 1);
    }
  }
}
