import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgClass } from "@angular/common";
import { Transformation, TransformationType, Transformer } from "../../../../helpers/Transformer";
import { Point } from "../../../../shared/coordinate/Point";

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
  private _isTransforming:boolean=false;
  private _transformation:Transformation;

  constructor() {
    this._transformation=new Transformation;
  }

  ngOnInit() {
    this._hasFocus=true;
  }

  cancel(){
    this.dialogCanceled.emit('dialog canceled');
  }

  onTransforming(event){
    if(this.isTransforming){
      this._transformation.targetPoint=new Point(event.screenX,event.screenY);
      Transformer.transform(this._transformation);

      this._transformation.initPoint.x=event.screenX;
      this._transformation.initPoint.y=event.screenY;
    }
  }

  onEndTransformation(){
    this._isTransforming=false;
  }

  onTransformation(event){
    this._isTransforming=true;
    switch (event.type){
      case 'POSITION':
        this._transformation.type=TransformationType.POSITION;
        console.log('kir');
        break;
    }
    this._transformation.ele=event.ele;
    this._transformation.initPoint=new Point(event.event.screenX,event.event.screenY);
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

  get isTransforming():boolean {
    return this._isTransforming;
  }
}
