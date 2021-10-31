import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.css']
})
export class ComponentbComponent implements OnInit {
  @Output() gevent=new EventEmitter()
  name='Harshita'
  constructor() { }

  ngOnInit(): void {
  }
greetEvent(){
  this.gevent.emit(this.name)
}
}
