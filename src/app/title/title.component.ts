import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  name = [ {first: 'Rojesh' }, {last: 'Dangol'}];

  address = [ {street: '816 Perry Hwy, Apt 24'},
              {city: 'Pittsburgh'},
              {state: 'PA'},
              {zip: '15229'} ];
            
              



  constructor() { }

  ngOnInit(): void {
  }

}
