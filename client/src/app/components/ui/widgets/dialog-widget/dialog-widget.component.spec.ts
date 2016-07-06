/* tslint:disable:no-unused-variable */

import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { describe, expect, it, inject, TestComponentBuilder } from "@angular/core/testing";
import { DialogWidgetComponent } from "./dialog-widget.component";

describe('Component: DialogWidget', () => {
  // let builder:TestComponentBuilder;
  // let fixture:ComponentFixture<any>;
  // let ele:DialogWidgetComponent;

  // beforeEach(async(inject([TestComponentBuilder],(tcb)=>{
  //   builder=tcb;
  // })));
  // beforeEach(async(inject([],()=>{
  //   return builder
  //     .createAsync(DialogWidgetTestComponent)
  //     .then((_fixture:ComponentFixture<any>)=>{
  //       fixture=_fixture;
  //       ele=_fixture.debugElement.query(By.directive(DialogWidgetComponent)).componentInstance;
  //     })
  // })));
  it('should create an instance', () => {
    let component = new DialogWidgetComponent();
    expect(component).toBeTruthy();
  });
  it('should lose focus if .dialog-transparent-container is clicked',inject([TestComponentBuilder],(tcb)=>{
    return tcb
      .createAsync(DialogWidgetTestComponent)
      .then((fixture)=>{
        fixture.detectChanges();
        let ele:DialogWidgetComponent=fixture.debugElement.query(By.directive(DialogWidgetComponent)).componentInstance;
        let container=fixture.nativeElement.querySelector('.dialog-transparent-container');
        expect(ele.hasFocus).toBe(true);
        container.click();
        fixture.detectChanges();
        expect(ele.hasFocus).toBe(false);
      });
  }));
  /* for this to work .dialog-container must stopPropagation because other wise
  * parent container (.dialog-transparent-container) will blur again. see above test*/
  it('should gt focus if .dialog-container-container is clicked',inject([TestComponentBuilder],(tcb)=>{
    return tcb
      .createAsync(DialogWidgetTestComponent)
      .then((fixture)=>{
        fixture.detectChanges();
        let ele:DialogWidgetComponent=fixture.debugElement.query(By.directive(DialogWidgetComponent)).componentInstance;
        let container=fixture.nativeElement.querySelector('.dialog-container');
        expect(ele.hasFocus).toBe(true);
        container.click();
        fixture.detectChanges();
        expect(ele.hasFocus).toBe(true);
      });
  }));

  it('should fire event if close X icon has been clicked',inject([TestComponentBuilder],(tcb)=>{
    return tcb
      .createAsync(DialogWidgetTestComponent)
      .then((fixture)=>{
        fixture.detectChanges();
        let closeX=fixture.nativeElement.querySelector('.dialog-close-icon');
        expect(fixture.componentInstance.dialogHasBeenCanceled).toBe(false);
        closeX.click();
        fixture.detectChanges();
        expect(fixture.componentInstance.dialogHasBeenCanceled).toBe(true);
      });
  }));
});

@Component({
  selector:'test',
  template:`
<div >
  <asm-dialog-widget [displayDialog]="true" (dialogCanceled)="onDialogCanceled()"></asm-dialog-widget>
</div>
`,
  directives:[DialogWidgetComponent]
})
class DialogWidgetTestComponent{
  dialogHasBeenCanceled=false;
  constructor(){

  }
  onDialogCanceled(){
    this.dialogHasBeenCanceled=true;
  }
}
