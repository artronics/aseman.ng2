import { MouseCoordinate } from "../../../shared/coordinate/MouseCoordinate";
import { Axis } from "../../../shared/coordinate/Axis";

export class ResizeEvent {
  private _htmlElement:HTMLElement;
  private _mouseInitialCor:MouseCoordinate;
  private _direction:Axis;

  set htmlElement(value:HTMLElement) {
    this._htmlElement = value;
  }

  set mouseInitialCor(value:MouseCoordinate) {
    this._mouseInitialCor = value;
  }

  set direction(value:Axis) {
    this._direction = value;
  }

  get htmlElement():HTMLElement {
    return this._htmlElement;
  }

  get mouseInitialCor():MouseCoordinate {
    return this._mouseInitialCor;
  }

  get direction():Axis {
    return this._direction;
  }
}
