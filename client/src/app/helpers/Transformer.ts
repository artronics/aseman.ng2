
import { Point } from "../shared/coordinate/Point";
export class Transformer{
  static transform(trans:Transformation){
    switch (trans.type){
      case TransformationType.POSITION:
        this.changePos(trans);
        break;
    }
  }
  private static changePos(trans:Transformation){
    let ele:HTMLElement=trans.ele;

    let newLeft=ele.offsetLeft+(trans.targetPoint.x-trans.initPoint.x);
    let newTop = ele.offsetTop+(trans.targetPoint.y-trans.initPoint.y);
    ele.style.left=String(newLeft)+'px';
    ele.style.top=String(newTop)+'px';
  }
}

export class Transformation{
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

  toString():string{
    return `type:${this._type}, X0:${this.initPoint.x}, Y0:${this.initPoint.y}, X1:${this.targetPoint.x}, Y1:${this.targetPoint.y}`;
  }
}

export enum TransformationType{
  POSITION,
  TOP,
}
