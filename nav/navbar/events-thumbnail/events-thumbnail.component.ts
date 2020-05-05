import { Component, OnInit ,Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {

  @Input() event:any
  
  ngOnInit() {
  }
  Logfoo(){
    console.log("sss");
  }

}
