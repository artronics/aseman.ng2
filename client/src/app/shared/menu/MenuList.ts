import { MenuItem } from "./BaseMenuItem";

export class MenuList{
  private _menuItems:MenuItem[]=[];

  constructor(private _name:string,
              private _title?:string,
              menuItems?:MenuItem[]) {
    this._menuItems = menuItems;
  }

  addMenuItem(item:MenuItem){
    this._menuItems.push(item);
  }

  get menuItems():MenuItem[] {
    return this._menuItems;
  }
}
