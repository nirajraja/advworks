import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  person:any = {};

  constructor(public peopleSrv:PeopleService) { }

  ngOnInit() {
    this.person = {};

    this.peopleSrv.getPerson(this.getRandomInt(55)).subscribe((data) => {
      this.person = data;
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
