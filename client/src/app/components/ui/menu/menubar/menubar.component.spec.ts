import { beforeEach, beforeEachProviders, describe, expect, it, inject } from "@angular/core/testing";
import { ComponentFixture, TestComponentBuilder } from "@angular/compiler/testing";
import { Component, EventEmitter, provide } from "@angular/core";
import { By } from "@angular/platform-browser";
import { MenubarComponent } from "./menubar.component";
import { ClickBroadcasterService } from "../../../../services/ui/events/click-broadcaster.service";

describe('Component: Menubar', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MenubarComponent,
    provide(ClickBroadcasterService,{useClass:ClickBroadcasterServiceMock})]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MenubarComponent],
      (component: MenubarComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MenubarComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MenubarComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  describe('Menubar Component internals',()=>{
    let menubar:MenubarComponent= new MenubarComponent(null);
    it('should set isActive to false by default',()=>{
      expect(menubar.isActive).toBe(false);
    });
    it('should set selectedTitle to -1 by default',()=>{
      expect(menubar.selectedTitle).toBe(-1);
    })
  });
  
  describe('Menubar Component behavior',()=>{
    let fixture:ComponentFixture<any>;
    let natElm:any;
    let com:any;
    beforeEach(inject([],()=>{
      return builder.createAsync(MenubarComponentTestController)
        .then((_fixture: ComponentFixture<any>) => {
          fixture=_fixture;
          natElm=fixture.nativeElement;
          com= fixture.debugElement.query(By.directive(MenubarComponent)).componentInstance;
        });
    }));
    it('shoud toggle isActive in click event',()=>{
      fixture.detectChanges();
      expect(com.isActive).toBe(false);
      natElm.querySelector('ul>li').click();
      fixture.detectChanges();
      expect(com.isActive).toBe(true);
      natElm.querySelector('ul>li').click();
      fixture.detectChanges();
      expect(com.isActive).toBe(false);
    });
    it('shoud toggle isActive in click event',()=>{
      expect(true).toBe(true);
    });
  });
});

@Component({
  selector: 'test',
  template: `
    <asm-menubar></asm-menubar>
  `,
  directives: [MenubarComponent]
})
class MenubarComponentTestController {
}
class ClickBroadcasterServiceMock{
  singleLeftClick$: EventEmitter<any>;

  constructor() {
    this.singleLeftClick$=new EventEmitter();
  }

}

