import { Injectable } from '@angular/core';
import { MenuList } from "../../shared/menu/MenuList";

@Injectable()
export class MenubarService {
  private _menuLists:MenuList[]=[];

  constructor() {}

  get menuLists():MenuList[] {
    return this._menuLists;
  }

  set menuLists(value:Array) {
    this._menuLists = value;
  }
}