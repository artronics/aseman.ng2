import { MenuList } from "../../shared/menu/MenuList";
import { ActionMenuItem } from "../../shared/menu/ActionMenuItem";

/**
 * This is not a factory but a class to separate the creation of menubar items and menuLists. The purpose is to encapsulate the process.
 */
export class MenubarItemFactory{
  private _menubarMenuLists:MenuList[]=[];

  constructor(){}

  public createMenubar(){
    this.createFile();
  }

  private createFile(){
    let file:MenuList=new MenuList('file','File');

    let newItem:ActionMenuItem=new ActionMenuItem('new','New');
    let open:ActionMenuItem=new ActionMenuItem('open','Open');

    file.addMenuItem(newItem);
    file.addMenuItem(open);

    this._menubarMenuLists.push(file);
  }

  get menubarMenuLists():MenuList[] {
    return this._menubarMenuLists;
  }
}
