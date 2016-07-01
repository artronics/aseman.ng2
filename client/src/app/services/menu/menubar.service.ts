import { Injectable } from "@angular/core";
import { MenuList } from "../../shared/menu/MenuList";

@Injectable()
export class MenubarService {
  private _menuLists:MenuList[]=[];

  constructor() {}

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
