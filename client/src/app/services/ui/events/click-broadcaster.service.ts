import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class ClickBroadcasterService {
  singleLeftClick$: EventEmitter<any>;

  constructor() {
    this.singleLeftClick$=new EventEmitter();
  }

  fireSingleLeftClick(){
    this.singleLeftClick$.emit(null);
  }

}
