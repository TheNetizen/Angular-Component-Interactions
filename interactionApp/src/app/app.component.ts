import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentAComponent } from './component-a/component-a.component';
import { CompservService } from './compserv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private service:CompservService){}
    //for viewChile decorator
  ngAfterViewInit(): void {
    this.nameElemRef.nativeElement.focus()
    this.childComponentRef.message="Ok"
    throw new Error('Method not implemented.');
    
  }
  title = 'interactionApp';
  userName!: String;
  outputName!:String;
  //for viewChile decorator
  name!:String;
  @ViewChild('nameRef') nameElemRef!:ElementRef;
  //Input
  userLoggedIn=true

//split 2 way data binding
  greetHarshita(updatedUserName:String){
      this.userName=updatedUserName
      if(updatedUserName==="Harshita"){
        alert('welcome back Harshita')
      }
      
  }
//using ref variable #child in parent component class
  //using ref variable #child in parent component class
  @ViewChild(ComponentAComponent)
  childComponentRef!: ComponentAComponent;

  //output child to parent
  greet(name:String){

    alert("Hello "+name)
  }

  greetStudent(){
this.service.sendMessage('Good Morning')
  }
  appreciateStudent(){
    this.service.sendMessage('Well Done!')
  }
}
