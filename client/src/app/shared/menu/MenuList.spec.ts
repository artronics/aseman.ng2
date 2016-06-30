/* tslint:disable:no-unused-variable */

import { beforeEach, describe, expect, it } from "@angular/core/testing";
import { MenuList } from "./MenuList";
import { MenuItem } from "./BaseMenuItem";

describe('MenuList: class',()=>{
  let menuList:MenuList;
  beforeEach(()=>{
    menuList=new MenuList('foo');
  });
  it('should add menuItems to items array',()=>{
    let menu = new MenuItem();
    menuList.addMenuItem(menu);
    expect(menuList.menuItems.length).toBe(1);
    expect(menuList.menuItems[0]).toBe(menu);
  })
});
