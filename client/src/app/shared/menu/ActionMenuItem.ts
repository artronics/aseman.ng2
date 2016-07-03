import { BaseMenuItem } from "./BaseMenuItem";
import { Action } from "../action/Action";

export class ActionMenuItem extends BaseMenuItem{
  private _action:Action;

  constructor(name:string,displayName:string,action:Action) {
    super();
    this._name=name;
    this._displayName=displayName;
    this._action=action;
  }
}
