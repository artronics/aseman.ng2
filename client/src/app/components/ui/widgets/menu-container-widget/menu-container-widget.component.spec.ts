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
  template:`<asm-menu-container-widget [menuItems]="items"></asm-menu-container-widget>`,
  directives:[MenuContainerWidgetComponent],
})
class MenuContainerWidgetTestComponent{
  items:BaseMenuItem[]=[];
  constructor(){
    /* populate some menu items*/
    this.items.push(new ActionMenuItem('foo','Foo Action'));
    this.items.push(new ActionMenuItem('bar','Bar Action'));
    
  }
}
