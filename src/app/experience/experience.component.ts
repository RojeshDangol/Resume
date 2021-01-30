import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  year = {start: '2011', end: '2015'};

  company = 'Help Me Dot Com. Pvt. Ltd';

  position = 'Assistant Manager';

  address = 'Kathmandu, Nepal';

  duties = [
    'Small scale online shopping and I was responsible to keep track of items in the store.',
    'Responsible of purchasing and updating new items to sell.', 
    'Manage the orders, decide how and when the delivery was to be made as the company had limited employees.',
    'Deal with other partner companies and get the best deal possible.'
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
