import { BaseMenuItem } from "./BaseMenuItem";

export class ActionMenuItem extends BaseMenuItem{

  constructor(name:string,displayName:string) {
    super();
    this._name=name;
    this._displayName=displayName;
  }
}
