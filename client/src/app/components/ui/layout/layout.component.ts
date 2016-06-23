import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { MenubarComponent } from "../menu/menubar/menubar.component";
import { NavigatorViewComponent } from "../views/navigator-view/navigator-view.component";
import { Resize } from "./resize.directive";
import { ResizeEvent } from "../../../services/ui/events/ResizeEvent";
import { Point } from "../../../shared/coordinate/Point";
import { Axis } from "../../../shared/coordinate/Axis";

@Component({
  moduleId: module.id,
  selector: 'asm-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
  directives: [MenubarComponent, NavigatorViewComponent, Resize],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit,OnDestroy {
  private _mouseupCursorPos:Point;
  private _mousemovePrevPos:Point;
  private _mousemoveCurPos:Point;

  private _isResizing:boolean = false;
  private _resizeEvent:ResizeEvent;

  private _tabsTitles:string[] = [];

  constructor() {
    this._mouseupCursorPos = new Point();
    this._mousemovePrevPos = new Point();
    this._mousemoveCurPos = new Point();
  }

  ngOnInit() {
    this._tabsTitles.push('Navigator');
  }

  ngOnDestroy() {
  }

  onMouseup($event) {
    this._mouseupCursorPos.x = $event.screenX;
    this._mouseupCursorPos.y = $event.screenY;

    if (this._isResizing) {
      this._isResizing = false;
    }
  }

  onMousemove($event) {
    if (this._isResizing) {
      this._mousemoveCurPos.x = $event.screenX;
      this._mousemoveCurPos.y = $event.screenY;
      this.resize(
        this._resizeEvent.htmlElement,
        this._resizeEvent.direction,
        this._mousemovePrevPos,
        this._mousemoveCurPos);

      this._mousemovePrevPos.x = this._mousemoveCurPos.x;
      this._mousemovePrevPos.y = this._mousemoveCurPos.y;
    }
  }

  onResize($event:ResizeEvent) {
    this._isResizing = true;
    this._resizeEvent = $event;
    //Initialize mousemove cursor position with this position
    this._mousemovePrevPos = $event.mouseInitialCor.screenCor;
  }

  private resize(el:HTMLElement, axis:Axis, oldP:Point, newP:Point) {
    let el_initWidth:number = el.clientWidth;
    let el_initHeight:number = el.clientHeight;
    let newWidth = el_initWidth + (newP.x - oldP.x);
    let newHeight = el_initHeight + (oldP.y - newP.y);//origin is top
    switch (axis) {
      case Axis.X:
        el.style.width = String(newWidth) + 'px';
        el.style.minWidth = String(newWidth) + 'px';
        break;
      case Axis.Y:
        el.style.height = String(newHeight) + 'px';
        el.style.minHeight = String(newHeight) + 'px';
        break;
      case Axis.BOTH:
        el.style.width = String(newWidth) + 'px';
        el.style.minWidth = String(newWidth) + 'px';

        el.style.height = String(newHeight) + 'px';
        el.style.minHeight = String(newHeight) + 'px';
        break;
    }
  }

  navSettingCntxMenu() {
    console.log('kir');
  }

  get tabsTitles():string[] {
    return this._tabsTitles;
  }
}
