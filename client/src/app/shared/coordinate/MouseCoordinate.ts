import { Point } from "./Point";

export class MouseCoordinate{

  constructor(private _screenCor?:Point,private _clientCor?:Point) {
  }


  get screenCor():Point {
    return this._screenCor;
  }

  set screenCor(value:Point) {
    this._screenCor = value;
  }

  get clientCor():Point {
    return this._clientCor;
  }

  set clientCor(value:Point) {
    this._clientCor = value;
  }
}
