import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'ResumeProject';
  
  dataArr= { name:{first: 'Rojesh', 
                last: 'Dangol' },
              address: {
                  street: '816 Perry Hwy',
                  apt: 'Apt 24',
                  city: 'Pittsburgh',
                  state: 'PA',
                  zip: '15229'
              }}


  
}
