/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MenubarComponent } from './menubar.component';
import { MenubarService } from "../../services/menu/menubar.service";
import { MenuList } from "../../shared/menu/MenuList";
import { ActionMenuItem } from "../../shared/menu/ActionMenuItem";

describe('Component: Menubar', () => {
  let component:MenubarComponent;
  let menubarService:MenubarService;
  beforeEach(()=>{
    menubarService=new MenubarServiceMock();
    component = new MenubarComponent(menubarService);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should get titles from menubar service during ngOnInit',()=>{
    expect(component.menubarTitles.length).toBe(0);
    component.ngOnInit();
    expect(component.menubarTitles.length).toBe(2);
  });
});

class MenubarServiceMock extends MenubarService{
  constructor(){
    super();
    let foo:MenuList=new MenuList('foo','Foo');
    foo.addMenuItem(new ActionMenuItem('new','New'));
    foo.addMenuItem(new ActionMenuItem('open','Open'));
    let bar:MenuList=new MenuList('bar','Bar');
    bar.addMenuItem(new ActionMenuItem('find','Find'));
    bar.addMenuItem(new ActionMenuItem('copy','Copy'));

    let lists:MenuList[]=[];
    lists.push(foo);lists.push(bar);

    this.menuLists=lists;
  }

}
