import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompservService {
  private _teacherMessageSource =new Subject<String>()
  teacherMessage$=this._teacherMessageSource.asObservable()
  constructor() { }

  sendMessage(message:String){
this._teacherMessageSource.next(message)
  }
}
