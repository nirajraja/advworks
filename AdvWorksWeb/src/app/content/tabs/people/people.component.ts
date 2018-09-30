import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  person:any = {};
  error:any = {};
  randNum:number = 0;

  constructor(public peopleSrv:PeopleService) { }

  ngOnInit() {
    this.person = {};
    this.randNum = this.getRandomInt(999);
    this.peopleSrv.getPerson(this.randNum).subscribe((data) => {
      this.person = data;
    }, (error) => {
      this.error = error;
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
