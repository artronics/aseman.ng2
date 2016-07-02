/* tslint:disable:no-unused-variable */

import { beforeEach, addProviders, describe, expect, it, inject } from "@angular/core/testing";
import { MenubarService } from "./menubar.service";
import { MenuList } from "../../shared/menu/MenuList";
import { ActionMenuItem } from "../../shared/menu/ActionMenuItem";
import { MenubarItemFactory } from "../../components/ide/MenubarItemFactory";

describe('Menubar Service', () => {
  let menubarService:MenubarService;

  beforeEach(()=>{
    addProviders([MenubarService,MenubarItemFactory]);

    menubarService=new MenubarService(new MenubarItemFactoryMock);
  });

  it('should ...',
      inject([MenubarService], (service: MenubarService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a list of titles for each menuList',()=>{
    let expTitles:string[]=['Foo','Bar'];
    expect(menubarService.getTitles()).toEqual(expTitles);
  });

  it('should get menuList by title. getMenuListByTitle()',()=>{
    let menuListByTitle = menubarService.getMenuListByTitle('Foo');
    console.log(menuListByTitle);
    expect(menuListByTitle.title).toBe('Foo');
  });

});
class MenubarItemFactoryMock extends MenubarItemFactory{
  private lists:MenuList[]=[];

  constructor(){
    super();
    let foo:MenuList=new MenuList('foo','Foo');
    foo.addMenuItem(new ActionMenuItem('new','New'));
    foo.addMenuItem(new ActionMenuItem('open','Open'));
    let bar:MenuList=new MenuList('bar','Bar');
    bar.addMenuItem(new ActionMenuItem('find','Find'));
    bar.addMenuItem(new ActionMenuItem('copy','Copy'));

    this.lists.push(foo);
    this.lists.push(bar);
  }

  get menubarMenuLists():MenuList[] {
    return this.lists;
  }
}
