import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'asm-dialog-widget',
  templateUrl: 'dialog-widget.component.html',
  styleUrls: ['dialog-widget.component.css'],
  directives:[NgClass]
})
export class DialogWidgetComponent implements OnInit {
  @Input()
  displayDialog:boolean=false;

  @Output()
  dialogCanceled:EventEmitter<string>=new EventEmitter();

  private _hasFocus:boolean=true;

  constructor() {}

  ngOnInit() {
    this._hasFocus=true;
  }

  cancel(){
    console.log('ancel dialog');
    console.log(this.displayDialog);
    this.dialogCanceled.emit('dialog canceled');
  }

  onFocus(event){
    event.stopPropagation();
    this._hasFocus=true;
    console.log(`focus`);
  }
  onBlur(){
    this._hasFocus=false;
    console.log(`blur`);
  }

  get hasFocus():boolean {
    return this._hasFocus;
  }
  hasBlur():boolean{
    return !this._hasFocus;
  }

}
