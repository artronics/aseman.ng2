import { beforeEach, beforeEachProviders, describe, expect, it, inject } from "@angular/core/testing";
import { ComponentFixture, TestComponentBuilder } from "@angular/compiler/testing";
import { Component, provide } from "@angular/core";
import { By } from "@angular/platform-browser";
import { NavigatorViewComponent } from "./navigator-view.component";
import { FileService } from "../../../../services/file/file.service";

describe('Component: NavigatorView', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [NavigatorViewComponent,
    provide(FileService,{useClass:FileService})]);

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([NavigatorViewComponent],
      (component: NavigatorViewComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NavigatorViewComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(NavigatorViewComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <asm-navigator-view></asm-navigator-view>
  `,
  directives: [NavigatorViewComponent]
})
class NavigatorViewComponentTestController {
}

