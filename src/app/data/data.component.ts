import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.get();
  }


}
