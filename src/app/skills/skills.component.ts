import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill = [
    'C++',
    'HTML / JavaScript / CSS',
    'Python',
    'MySQL',
    'Angular',
    'Shell Scripting',
    'Adobe Photoshop / InDesign / Illustrator',
    '3D Modelling',
    'Git',
    'Arduino Programming'
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
