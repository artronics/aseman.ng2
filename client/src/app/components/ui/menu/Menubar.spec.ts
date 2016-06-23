import { beforeEach, describe, expect, it } from "@angular/core/testing";
import { Menubar } from "./Menubar";
import { MenuItem } from "./MenuItem";
import { Menu } from "./Menu";

describe('Model Menubar',()=>{
  let menubar = new Menubar();
  beforeEach(()=>{
    let foo = new MenuItem({name:'foo'});
    let bar = new MenuItem({name:'bar'});
    let menu = new Menu();
    menu.addItem(foo);
    menu.addItem(bar);
    menubar.add({title:'mTitle',menu:menu});
    menubar.add({title:'mNull',menu:new Menu()});
  });
  describe('getTitles',()=>{
    it('should return key set values with titles in menubar ',()=>{
      let exp = ['mTitle','mNull'];
      let act:string[] = menubar.getTitles();
      expect(act).toEqual(exp);
    })

  })
});
