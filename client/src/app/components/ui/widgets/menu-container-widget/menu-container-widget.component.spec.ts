/* tslint:disable:no-unused-variable */

import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import {
  beforeEach,
  describe,
  expect,
  it,
  async,
  inject,
  TestComponentBuilder,
  ComponentFixture
} from "@angular/core/testing";
import { MenuContainerWidgetComponent } from "./menu-container-widget.component";
import { BaseMenuItem } from "../../../../shared/menu/BaseMenuItem";
import { ActionMenuItem } from "../../../../shared/menu/ActionMenuItem";
import { MenuList } from "../../../../shared/menu/MenuList";

describe('Component: MenuContainerWidget', () => {
  let builder:TestComponentBuilder;
  let fixture:ComponentFixture<any>;
  let el:MenuContainerWidgetComponent;

  beforeEach(async(inject([TestComponentBuilder],(tcb)=>{
    builder=tcb;
  })));
  beforeEach(async(inject([],()=>{
    return builder
      .createAsync(MenuContainerWidgetTestComponent)
      .then((_fixture:ComponentFixture<any>)=>{
        fixture=_fixture;
        el=_fixture.debugElement.query(By.directive(MenuContainerWidgetComponent)).componentInstance;
      })
  })));

  it('should create an instance', () => {
    let component = new MenuContainerWidgetComponent();
    expect(component).toBeTruthy();
  });

  it('should populate li elements based on menuItems',()=>{
    fixture.detectChanges();
    let lis=fixture.nativeElement.querySelectorAll('asm-menu-container-widget>ul>li');
    expect(lis.length).toBe(2);

  });

});

@Component({
  selector:'test',
  template:`<asm-menu-container-widget [menuList]="menuList"></asm-menu-container-widget>`,
  directives:[MenuContainerWidgetComponent],
})
class MenuContainerWidgetTestComponent{
  menuList:MenuList;
  constructor(){
    /* populate some menu items*/
    let items:BaseMenuItem[]=[];
    items.push(new ActionMenuItem('foo','Foo Action'));
    items.push(new ActionMenuItem('bar','Bar Action'));

    this.menuList=new MenuList('menuList','Menu List',items);
  }
}
