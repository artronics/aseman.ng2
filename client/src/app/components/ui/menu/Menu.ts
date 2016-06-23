import { MenuItem } from "./MenuItem";

export class Menu{
  private _items:MenuItem[]=[];
  
  addItem(item:MenuItem){
    this._items.push(item);
  }

  get items():MenuItem[] {
    return this._items;
  }
}
