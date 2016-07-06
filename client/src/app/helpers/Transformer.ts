import { Point } from "../shared/coordinate/Point";

export class Transformer {

  static transform(trans:Transformation) {
    switch (trans.type) {
      case TransformationType.POSITION:
        this.changePos(trans);
        break;

      case TransformationType.TOP:
        this.resizeTop(trans.ele, trans.initPoint, trans.targetPoint);
        break;
      case TransformationType.RIGHT:
        this.resizeRight(trans.ele, trans.initPoint, trans.targetPoint);
        break;
      case TransformationType.BOTTOM:
        this.resizeBottom(trans.ele, trans.initPoint, trans.targetPoint);
        break;
      case TransformationType.LEFT:
        this.resizeLeft(trans.ele, trans.initPoint, trans.targetPoint);
        break;
      case TransformationType.TOP_RIGHT:
        this.resizeTop(trans.ele, trans.initPoint, trans.targetPoint);
        this.resizeRight(trans.ele, trans.initPoint, trans.targetPoint);
        break;
      case TransformationType.TOP_LEFT:
        this.resizeTop(trans.ele, trans.initPoint, trans.targetPoint);
        this.resizeLeft(trans.ele, trans.initPoint, trans.targetPoint);
        break;
      case TransformationType.BOTTOM_RIGHT:
        this.resizeBottom(trans.ele, trans.initPoint, trans.targetPoint);
        this.resizeRight(trans.ele, trans.initPoint, trans.targetPoint);
        break;
      case TransformationType.BOTTOM_LEFT:
        this.resizeBottom(trans.ele, trans.initPoint, trans.targetPoint);
        this.resizeLeft(trans.ele, trans.initPoint, trans.targetPoint);
        break;
    }
  }

  private static changePos(trans:Transformation) {
    let ele:HTMLElement = trans.ele;

    let newLeft = ele.offsetLeft + (trans.targetPoint.x - trans.initPoint.x);
    let newTop = ele.offsetTop + (trans.targetPoint.y - trans.initPoint.y);
    ele.style.left = String(newLeft) + 'px';
    ele.style.top = String(newTop) + 'px';
  }

  private static resizeTop(ele:HTMLElement, p0:Point, p1:Point) {
    let yDiff = p1.y - p0.y;
    let newHeight = ele.clientHeight - yDiff;
    let newTop = ele.offsetTop + (p1.y - p0.y);
    ele.style.height = String(newHeight) + 'px';
    ele.style.minHeight = String(newHeight) + 'px';
    ele.style.top = String(newTop) + 'px';
  }

  private static resizeRight(ele:HTMLElement, p0:Point, p1:Point) {
    let xDiff = p1.x - p0.x;
    let newWidth = ele.clientWidth + xDiff;
    ele.style.width = String(newWidth) + 'px';
    ele.style.minWidth = String(newWidth) + 'px';
  }

  private static resizeBottom(ele:HTMLElement, p0:Point, p1:Point) {
    let yDiff = p1.y - p0.y;
    let newHeight = ele.clientHeight + yDiff;
    ele.style.height = String(newHeight) + 'px';
    ele.style.minHeight = String(newHeight) + 'px';
  }

  private static resizeLeft(ele:HTMLElement, p0:Point, p1:Point) {
    let xDiff = p1.x - p0.x;
    let newWidth = ele.clientWidth - xDiff;
    let newLeft = ele.offsetLeft + (p1.x - p0.x);
    ele.style.width = String(newWidth) + 'px';
    ele.style.minWidth = String(newWidth) + 'px';
    ele.style.left = String(newLeft) + 'px';
  }
}

export class Transformation {
  private _type:TransformationType;
  private _ele:HTMLElement;
  private _initPoint:Point;
  private _targetPoint:Point;

  get type():TransformationType {
    return this._type;
  }

  set type(value:TransformationType) {
    this._type = value;
  }

  get ele():HTMLElement {
    return this._ele;
  }

  set ele(value:HTMLElement) {
    this._ele = value;
  }

  get initPoint():Point {
    return this._initPoint;
  }

  set initPoint(value:Point) {
    this._initPoint = value;
  }

  get targetPoint():Point {
    return this._targetPoint;
  }

  set targetPoint(value:Point) {
    this._targetPoint = value;
  }

  toString():string {
    return `type:${this._type}, X0:${this.initPoint.x}, Y0:${this.initPoint.y}, X1:${this.targetPoint.x}, Y1:${this.targetPoint.y}`;
  }
}

export enum TransformationType{
  POSITION,

  TOP,
  RIGHT,
  BOTTOM,
  LEFT,

  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  TOP_RIGHT,
  TOP_LEFT,
}
