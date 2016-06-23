export class MenuItem {

  constructor(private _item:Item) {
  }

  get name():string {
    return this._item.name;
  }

  toString():string {
    return this._item.name;
  }
}
interface Item{
  name:string;
}
