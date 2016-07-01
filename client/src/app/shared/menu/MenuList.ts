
import { BaseMenuItem } from "./BaseMenuItem";
export class MenuList{
  private _menuItems:BaseMenuItem[]=[];

  constructor(private _name:string,
              private _title?:string,
              menuItems?:BaseMenuItem[]) {
    if (menuItems){
      this._menuItems = menuItems;
    }
  }

  addMenuItem(item:BaseMenuItem){
    this._menuItems.push(item);
  }

  get menuItems():BaseMenuItem[] {
    return this._menuItems;
  }

  get title():string {
    return this._title;
  }
}
