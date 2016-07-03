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
import { MenubarComponent } from "./menubar.component";
import { MenubarService } from "../../services/menu/menubar.service";
import { MenuList } from "../../shared/menu/MenuList";
import { ActionMenuItem } from "../../shared/menu/ActionMenuItem";
import { MenubarItemFactory } from "../ide/MenubarItemFactory";

describe('Component: Menubar', () => {
  let builder:TestComponentBuilder;
  let fixture:ComponentFixture<any>;
  let component:MenubarComponent;
  let menubarService:MenubarService;
  let ele:MenubarComponent;
  beforeEach(()=> {
    // addProviders([MenubarComponent,{provide:MenubarService,useValue:menubarService}]);
    menubarService = new MenubarServiceMock();
    component = new MenubarComponent(menubarService);

  });

  beforeEach(async(inject([TestComponentBuilder], (tcb)=> {
    builder = tcb;
  })));
  beforeEach(async(inject([], ()=> {
    return builder
      .overrideProviders(MenubarComponent,[{provide:MenubarService,useValue:menubarService}])
      .createAsync(MenubarTestComponent)
      .then((_fixture:ComponentFixture<any>)=> {
        fixture = _fixture;
        ele = fixture.debugElement.query(By.directive(MenubarComponent)).componentInstance;
      })
  })));

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set isActive to false as default',()=>{
    expect(component.isActive).toBe(false);
  });
  it('should set selectedItemIndex to -1 as default',()=>{
    expect(component.selectedItemIndex).toBe(-1);
  });

  it('should get titles from menubar service during ngOnInit', ()=> {
    expect(component.menubarTitles.length).toBe(0);
    component.ngOnInit();
    expect(component.menubarTitles.length).toBe(2);
  });

  it('should create the component', ()=> {
    let query = fixture.debugElement.query(By.directive(MenubarComponent));
    expect(query).toBeTruthy();
    expect(query.componentInstance).toBeTruthy();
  });

  it('should populate li elements inside titles', ()=> {
    fixture.detectChanges();
    let lis:NodeList = fixture.nativeElement.querySelectorAll('asm-menubar>ul>li>span');
    expect(lis.length).toBe(2);
    expect(lis[0].textContent).toBe('Foo');
    expect(lis[1].textContent).toBe('Bar');
  });

  it('should set isActive to true on click event on titles',()=>{
    fixture.detectChanges();
    let li:HTMLElement=fixture.nativeElement.querySelector('asm-menubar>ul>li');
    expect(ele.isActive).toBe(false);
    li.click();
    expect(ele.isActive).toBe(true);
  });

  it('should set selectedItemIndex to li index on click event (test index 0)',()=>{
    fixture.detectChanges();
    let li=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li');
    li[0].click();
    fixture.detectChanges();
    expect(ele.selectedItemIndex).toBe(0);
  });
  it('should set selectedItemIndex to li index on click event(test index 1)',()=>{
    fixture.detectChanges();
    let li=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li');
    li[1].click();
    fixture.detectChanges();
    expect(ele.selectedItemIndex).toBe(1);
  });
  it('should return true if isSelected(inx) points to selected index',()=>{
    fixture.detectChanges();
    let li=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li');
    li[1].click();
    expect(ele.isSelected(1)).toBe(true);
    expect(ele.isSelected(0)).toBe(false);
  });

  it('should toggle isActive upon each click',()=>{
    fixture.detectChanges();
    let li:HTMLElement=fixture.nativeElement.querySelector('asm-menubar>ul>li');
    expect(ele.isActive).toBe(false);
    li.click();
    li.click();
    expect(ele.isActive).toBe(false);
  });

  it('should set selectedItemIndex back to -1 when isActive is false',()=>{
    fixture.detectChanges();
    let li:HTMLElement=fixture.nativeElement.querySelector('asm-menubar>ul>li');
    li.click();
    li.click();
    expect(ele.selectedItemIndex).toBe(-1);
  });


  it('should add "selected" class to selected li element',()=>{
    fixture.detectChanges();
    let li:HTMLElement[]=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li');

    expect(li[0].classList).not.toContain('selected');
    li[0].click();
    fixture.detectChanges();
    expect(li[0].classList).toContain('selected');
  });

  it('should change selectedItemIndex on mouseenter if isActive is true',()=>{
    fixture.detectChanges();
    let li:HTMLElement[]=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li');

    // make it active
    li[0].dispatchEvent(new Event('click'));
    fixture.detectChanges();
    li[1].dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(ele.selectedItemIndex).toBe(1);
  });

  it('should add a div to li content if it is selected',()=>{
    fixture.detectChanges();
    let li:HTMLElement[]=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li');
    let div:HTMLElement[]=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li>div');
    expect(div.length).toBe(0);

    li[0].click();
    fixture.detectChanges();
    div=fixture.nativeElement.querySelectorAll('asm-menubar>ul>li>div');
    expect(div.length).toBe(1);
  });

  it('should get MenuList from menuService based on index',()=>{
    fixture.detectChanges();
    let menuList:MenuList=ele.getMenuList(0);
    expect(menuList.title).toBe('Foo');
  });

  it('should get MenuList from menu service and feed it to MenuContainerWidgetComponent',()=>{

  });

});
@Component({
  selector: 'test',
  template: `<asm-menubar></asm-menubar>`,
  directives: [MenubarComponent]
})
class MenubarTestComponent {
}

class MenubarServiceMock extends MenubarService {
  constructor() {
    super(new MenubarItemFactoryMock());
  }
}
class MenubarItemFactoryMock extends MenubarItemFactory {
  private lists:MenuList[] = [];

  constructor() {
    super();
    let foo:MenuList = new MenuList('foo', 'Foo');
    foo.addMenuItem(new ActionMenuItem('new', 'New'));
    foo.addMenuItem(new ActionMenuItem('open', 'Open'));
    let bar:MenuList = new MenuList('bar', 'Bar');
    bar.addMenuItem(new ActionMenuItem('find', 'Find'));
    bar.addMenuItem(new ActionMenuItem('copy', 'Copy'));

    this.lists.push(foo);
    this.lists.push(bar);
  }

  get menubarMenuLists():MenuList[] {
    return this.lists;
  }
}
