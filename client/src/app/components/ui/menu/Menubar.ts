import { Menu } from "./Menu";

export class Menubar{
  private _menubarItems:MenubarItem[]=[];

  add(menubarItem:MenubarItem){
    this._menubarItems.push(menubarItem);
  }

  getTitles():string[]{
    let titles:string[]=[];
    for(let mi of this._menubarItems){
      titles.push(mi.title);
    }

    return titles;
  }

  get menubarItems():MenubarItem[] {
    return this._menubarItems;
  }
}

interface MenubarItem{
  title:string;
  menu:Menu;
}
