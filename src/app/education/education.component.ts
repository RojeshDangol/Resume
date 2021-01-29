import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  year = [ {start: 'Aug 2015'}, {end: 'May 2020'}];

  degree = ['Computer Science Information Technology'];

  college = ['Slippery Rock University'];

  address = ['Slippery Rock, PA'];

  constructor() { }

  ngOnInit(): void {
  }

}
