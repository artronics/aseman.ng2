/* tslint:disable:no-unused-variable */

import { beforeEach, describe, expect, it } from "@angular/core/testing";
import { MenuList } from "./MenuList";
import { ActionMenuItem } from "./ActionMenuItem";
import { Action } from "../action/Action";

describe('MenuList: class',()=>{
  let menuList:MenuList;
  beforeEach(()=>{
    menuList=new MenuList('foo');
  });

  it('should add menuItems to items array',()=>{
    let menu = new ActionMenuItem('nameFoo','displayNameBar',new Action('nameFoo',()=>{}));
    menuList.addMenuItem(menu);
    expect(menuList.menuItems.length).toBe(1);
    expect(menuList.menuItems[0]).toBe(menu);
  })
});
