import { MenuList } from "../../shared/menu/MenuList";
import { ActionMenuItem } from "../../shared/menu/ActionMenuItem";
import { Injectable } from "@angular/core";

/**
 * This is not a factory but a class to separate the creation of menubar items and menuLists. The purpose is to encapsulate the process.
 */
@Injectable()
export class MenubarItemFactory{
  private _menubarMenuLists:MenuList[]=[];

  constructor(){}

  public createMenubar(){
    this.createFile();
    this.createEdit();
  }

  private createFile(){
    let file:MenuList=new MenuList('file','File');

    let newItem:ActionMenuItem=new ActionMenuItem('new','New');
    let open:ActionMenuItem=new ActionMenuItem('open','Open');

    file.addMenuItem(newItem);
    file.addMenuItem(open);

    this._menubarMenuLists.push(file);
  }
  private createEdit(){
    let edit:MenuList=new MenuList('edit','Edit');

    let copy:ActionMenuItem=new ActionMenuItem('copy','Copy');
    let paste:ActionMenuItem=new ActionMenuItem('paste','Paste');
    paste.enable=false;

    edit.addMenuItem(copy);
    edit.addMenuItem(paste);

    this._menubarMenuLists.push(edit);
  }

  get menubarMenuLists():MenuList[] {
    return this._menubarMenuLists;
  }
}
