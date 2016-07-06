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
    this._transformation.ele=event.ele;
    this._transformation.initPoint=new Point(event.event.screenX,event.event.screenY);
    switch (event.type){
      case 'POSITION':
        this._transformation.type=TransformationType.POSITION;
        break;
      case 'TOP':
        this._transformation.type=TransformationType.TOP;
        break;
      case 'RIGHT':
        this._transformation.type=TransformationType.RIGHT;
        break;
      case 'BOTTOM':
        this._transformation.type=TransformationType.BOTTOM;
        break;
      case 'LEFT':
        this._transformation.type=TransformationType.LEFT;
        break;
      case 'BOTTOM_RIGHT':
        this._transformation.type=TransformationType.BOTTOM_RIGHT;
        break;
      case 'BOTTOM_LEFT':
        this._transformation.type=TransformationType.BOTTOM_LEFT;
        break;
      case 'TOP_RIGHT':
        this._transformation.type=TransformationType.TOP_RIGHT;
        break;
      case 'TOP_LEFT':
        this._transformation.type=TransformationType.TOP_LEFT;
        break;
    }
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
