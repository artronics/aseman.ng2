import { Directive, ElementRef, Input, HostListener, Output, EventEmitter } from "@angular/core";
import { ResizeEvent } from "../../../services/ui/events/ResizeEvent";
import { MouseCoordinate } from "../../../shared/coordinate/MouseCoordinate";
import { Point } from "../../../shared/coordinate/Point";
import { Axis } from "../../../shared/coordinate/Axis";

@Directive({
  selector: '[asm-resize]',
})
export class Resize {
  private _el:HTMLElement;
  private _resizeEvent:ResizeEvent;

  @Input('asm-resize')
  public targetEle:HTMLElement;

  @Input('asm-resize-axis')
  set direction(value:string) {
    let a:Axis;
    switch (value.toUpperCase()){
      case 'VERTICAL':
      case 'VER':
      case 'V':
      case 'X':
        a=Axis.X;
        break;
      case 'HORIZONTAL':
      case 'HOR':
      case 'H':
      case 'Y':
        a=Axis.Y;
        break;
      case 'BOTH':
      case 'B':
        a=Axis.BOTH;
    }

    this._resizeEvent.direction = a;
  }

  @Output('asm-on-resize')
  resize:EventEmitter<ResizeEvent>=new EventEmitter<ResizeEvent>();

  constructor(el:ElementRef) {
    this._el = el.nativeElement;

    this._resizeEvent = new ResizeEvent();
  }


  @HostListener('mousedown', ['$event'])
  onMousedown($event) {
    let mousePos:MouseCoordinate = new MouseCoordinate();
     mousePos.screenCor= new Point($event.screenX,$event.screenY);
    this._resizeEvent.mouseInitialCor = mousePos;
    this._resizeEvent.htmlElement = this.targetEle;

    this.resize.emit(this._resizeEvent);
    console.log(this._resizeEvent);
  }

}
