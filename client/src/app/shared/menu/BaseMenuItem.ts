
export abstract class BaseMenuItem{
  protected _name:string;
  protected _displayName:string;
  protected _enable:boolean=true;


  get enable():boolean {
    return this._enable;
  }

  set enable(value:boolean) {
    this._enable = value;
  }

  get displayName():string {
    return this._displayName;
  }
}
