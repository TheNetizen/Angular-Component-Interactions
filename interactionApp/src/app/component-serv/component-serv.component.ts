import { Component, OnInit } from '@angular/core';
import { CompservService } from '../compserv.service';

@Component({
  selector: 'app-component-serv',
  templateUrl: './component-serv.component.html',
  styleUrls: ['./component-serv.component.css']
})
export class ComponentServComponent implements OnInit {
//data transfer using subject of Service
  constructor(private service:CompservService) { }

  ngOnInit(): void {
    this.service.teacherMessage$.subscribe(message =>{
      if(message === "Good Morning"){
alert("Good Morning Teacher")
      }else{
        alert("Thankyou Teacher")
      }
    })
  }

}
