
export class Point{
  private _x:number;
  private _y:number;

  constructor(x?:number, y?:number) {
    this._x = x;
    this._y = y;
  }

  set x(value:number) {
    this._x = value;
  }

  set y(value:number) {
    this._y = value;
  }

  get x():number {
    return this._x;
  }

  get y():number {
    return this._y;
  }

  toString():string{
    return `X:${this._x}, Y:${this._y}`;
  }
}
