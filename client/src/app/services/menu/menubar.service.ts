import { Injectable, Inject } from "@angular/core";
import { MenuList } from "../../shared/menu/MenuList";
import { MenubarItemFactory } from "../../components/ide/MenubarItemFactory";

@Injectable()
export class MenubarService {
  private _menuLists:MenuList[];
  menubarItemFactory:MenubarItemFactory;

  constructor(@Inject(MenubarItemFactory) menubarItemFactory:MenubarItemFactory) {
    this.menubarItemFactory=menubarItemFactory;
    this.menubarItemFactory.createMenubar();
    this._menuLists=this.menubarItemFactory.menubarMenuLists;
  }

  getTitles():string[]{
    let titles:string[]=[];
    for(let list of this._menuLists){
      titles.push(list.title);
    }

    return titles;
  }

  get menuLists():MenuList[] {
    return this._menuLists;
  }

  set menuLists(items:MenuList[]) {
    this._menuLists = items;
  }
}
