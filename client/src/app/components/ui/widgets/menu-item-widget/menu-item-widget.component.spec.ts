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
import { MenuItemWidgetComponent } from "./menu-item-widget.component";
import { BaseMenuItem } from "../../../../shared/menu/BaseMenuItem";
import { ActionMenuItem } from "../../../../shared/menu/ActionMenuItem";

describe('Component: MenuItemWidget', () => {
  let builder:TestComponentBuilder;
  let fixture:ComponentFixture<any>;
  let el:MenuItemWidgetComponent;

  beforeEach(async(inject([TestComponentBuilder],(tcb)=>{
    builder=tcb;
  })));
  beforeEach(async(inject([],()=>{
    return builder
      .createAsync(MenuItemWidgetTestComponent)
      .then((_fixture:ComponentFixture<any>)=>{
        fixture=_fixture;
        el=_fixture.debugElement.query(By.directive(MenuItemWidgetComponent)).componentInstance;
      })
  })));
  it('should create an instance', () => {
    let component = new MenuItemWidgetComponent();
    expect(component).toBeTruthy();
  });
});

@Component({
  selector:'test',
  template:`<asm-menu-item-widget [menuItem]="actionItem"></asm-menu-item-widget>`,
  directives:[MenuItemWidgetComponent]
})
class MenuItemWidgetTestComponent{
  actionItem:BaseMenuItem=new ActionMenuItem('foo','Foo Action');
}

