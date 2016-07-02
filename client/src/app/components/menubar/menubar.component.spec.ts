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
  let ele;
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
    let lis:NodeList = fixture.nativeElement.querySelectorAll('asm-menubar>ul>li');
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
  it('should toggle isActive upon each click',()=>{
    fixture.detectChanges();
    let li:HTMLElement=fixture.nativeElement.querySelector('asm-menubar>ul>li');
    expect(ele.isActive).toBe(false);
    li.click();
    li.click();
    expect(ele.isActive).toBe(false);
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
/*

 it('should create the component', inject([], () => {
 return builder.createAsync(MenubarComponentTestController)
 .then((fixture: ComponentFixture<any>) => {
 let query = fixture.debugElement.query(By.directive(MenubarComponent));
 expect(query).toBeTruthy();
 expect(query.componentInstance).toBeTruthy();
 });
 }));
 * */
