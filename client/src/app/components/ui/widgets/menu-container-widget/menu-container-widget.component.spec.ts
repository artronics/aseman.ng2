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

  it('should set selectedItemIndex to -1 as default',()=>{
    expect(el.selectedItemIndex).toBe(-1);
  });

  it('should populate li elements based on menuItems',()=>{
    fixture.detectChanges();
    let lis=fixture.nativeElement.querySelectorAll('asm-menu-container-widget>ul>li');
    expect(lis.length).toBe(3);
  });

  it('should change selectedItemIndex to index onMouseenter',()=>{
    fixture.detectChanges();
    let li=fixture.nativeElement.querySelector('asm-menu-container-widget>ul>li');
    li.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    expect(el.selectedItemIndex).toBe(0);
  });

  it('should change selectedItemIndex back to -1 onMouseleave',()=>{
    fixture.detectChanges();
    let li=fixture.nativeElement.querySelector('asm-menu-container-widget>ul>li');
    li.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    li.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();

    expect(el.selectedItemIndex).toBe(-1);
  });

  it('should add "selected" class to selected li element',()=>{
    fixture.detectChanges();
    let li:HTMLElement[]=fixture.nativeElement.querySelectorAll('asm-menu-container-widget>ul>li');

    expect(li[0].classList).not.toContain('selected');
    li[0].dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(li[0].classList).toContain('selected');
  });
  it('should disable hover (mouseenter) for disabled items',()=>{
    fixture.detectChanges();
    let li:HTMLElement[]=fixture.nativeElement.querySelectorAll('asm-menu-container-widget>ul>li');

    expect(li[2].classList).not.toContain('selected');
    li[2].dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(li[2].classList).not.toContain('selected');
    expect(el.selectedItemIndex).toBe(-1);
  });
  it('should add "disabled-menu-item" class to disabled items',()=>{
    fixture.detectChanges();
    let li:HTMLElement[]=fixture.nativeElement.querySelectorAll('asm-menu-container-widget>ul>li');

    expect(li[2].classList).toContain('disabled');
  });

  xit('should feed MenuItemWidgetComponent with corresponding BaseMenuItem',()=>{

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

    let disabledItem = new ActionMenuItem('disabled', 'Disabled Action');
    disabledItem.enable=false;
    items.push(disabledItem);

    this.menuList=new MenuList('menuList','Menu List',items);
  }
}
