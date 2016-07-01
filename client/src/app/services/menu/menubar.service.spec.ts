/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MenubarService } from './menubar.service';
import { MenuList } from "../../shared/menu/MenuList";
import { ActionMenuItem } from "../../shared/menu/ActionMenuItem";

describe('Menubar Service', () => {
  let menubarService:MenubarService;
  beforeEachProviders(() => [MenubarService]);

  beforeEach(()=>{
    menubarService=new MenubarService();

    let foo:MenuList=new MenuList('foo','Foo');
    foo.addMenuItem(new ActionMenuItem('new','New'));
    foo.addMenuItem(new ActionMenuItem('open','Open'));
    let bar:MenuList=new MenuList('bar','Bar');
    bar.addMenuItem(new ActionMenuItem('find','Find'));
    bar.addMenuItem(new ActionMenuItem('copy','Copy'));

    let lists:MenuList[]=[];
    lists.push(foo);lists.push(bar);
    menubarService.menuLists=lists;
  })

  it('should ...',
      inject([MenubarService], (service: MenubarService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a list of titles for each menuList',()=>{
    let expTitles:string[]=['Foo','Bar'];
    expect(menubarService.getTitles()).toEqual(expTitles);
  });

});
