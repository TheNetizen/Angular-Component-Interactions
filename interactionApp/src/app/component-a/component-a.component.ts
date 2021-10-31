import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  @Input()
  loggedIn!:boolean
  message!:String
  
  name="Harsh"
  constructor() { }

  ngOnInit(): void {
  }
greetHarsh(){
  alert("Harsh!")
}
}
