import { beforeEach, beforeEachProviders, describe, expect, it, inject } from "@angular/core/testing";
import { ComponentFixture, TestComponentBuilder } from "@angular/compiler/testing";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";
import { LayoutComponent } from "./layout.component";
import { ClickBroadcasterService } from "../../../services/ui/events/click-broadcaster.service";

describe('Component: Layout', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LayoutComponent,ClickBroadcasterService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LayoutComponent],
      (component: LayoutComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LayoutComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LayoutComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <asm-layout></asm-layout>
  `,
  directives: [LayoutComponent]
})
class LayoutComponentTestController {
}

