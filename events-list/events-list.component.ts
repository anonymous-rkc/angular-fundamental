import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template:`<app-events-thumbnail #thumbnail [event] ="event"></app-events-thumbnail>
  <button class="btn btn-primary" (click)="thumbnail.Logfoo()">Click me!</button>`
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  event = {
    id:1,
    name:'Angular Connect',
    data:'2020-05-02',
    time:'10:00 am',
    price:599,
    imageUrl:'./assets/images/angularconnect-shield.png',
    location:{
      address:'657/11',
      city:'Delhi',
      country:'India'
    }
  }
}
