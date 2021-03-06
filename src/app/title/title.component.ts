import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  data:any;


  //name = {first: 'Rojesh', last: 'Dangol'};

  address = {street: '816 Perry Hwy',
              apt: 'Apt 24',
              city: 'Pittsburgh',
              state: 'PA',
              zip: '15229'};
  
  contact = {email: 'rozsx1@gmail.com',
              phone: '4126893520',
              link: 'www.linkedin.com/in/rojesh-dangol'};


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.get();
  }

}
