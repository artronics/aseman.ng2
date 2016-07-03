export class Action{
  private _action:()=>void;
  private _name:string;

  constructor(name:string,action:()=>void) {
    this._name=name;
    this._action = action;
  }

  public fire(){
    this._action();
  }

  get name():string {
    return this._name;
  }
}
