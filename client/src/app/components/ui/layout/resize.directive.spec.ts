///<reference path="../../../services/file/file.service.ts"/>
import { beforeEach, describe, expect, it, inject } from "@angular/core/testing";
import { ComponentFixture, TestComponentBuilder } from "@angular/compiler/testing";
import { Component, Output, EventEmitter } from "@angular/core";
import { Resize } from "./resize.directive";
import { ResizeEvent } from "../../../services/ui/events/ResizeEvent";
import { Axis } from "../../../shared/coordinate/Axis";

@Component({
  selector: 'test-component',
  directives: [Resize],
  template: `<section #asm_nav><div (asm-on-resize)="onResize($event)" [asm-resize]="asm_nav" [asm-resize-axis]="'h'"></div></section>`
})
class TestComponent {
  @Output() resizeTest:EventEmitter<any> = new EventEmitter();
  public $event:any;
  axis:Axis;

  onResize(event) {
    this.$event=event;
    this.resizeTest.emit(this.$event);
  }
}

describe('Resize Directive', () => {
  let fixture:ComponentFixture<any>;
  let builder:TestComponentBuilder;
  let el:HTMLElement;
  let cm:any;

  let resizeEvent:ResizeEvent;

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));
  beforeEach(inject([],()=>{
    return builder.createAsync(TestComponent)
      .then((_fixture: ComponentFixture<any>) => {
        fixture=_fixture;
        el=fixture.nativeElement.querySelector('div');
        cm= fixture.componentInstance;
      });
  }));

  it('should send an ResizeEvent object', ()=> {
    fixture.detectChanges();
    cm.resizeTest.subscribe((e:ResizeEvent)=> {
      expect(e).not.toBeNull();
    });
    el.dispatchEvent(new Event('mousedown'));

    fixture.detectChanges();
  });

  describe('Resize Directive: Internals',()=>{
    // let resizeEvent:ResizeEvent;
    let eventP:Promise<ResizeEvent>;
    beforeEach(()=>{
      eventP= new Promise<ResizeEvent>(function (resolve,reject) {
        fixture.detectChanges();
        let event:ResizeEvent;
        cm.resizeTest.subscribe((e:ResizeEvent)=> {
          event=e
        });
        el.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();
        if (event!=null){
          resolve(event);
        }
        else {
          reject(Error('event is null'));
        }
      });

    });
    let cb=function ():Promise<ResizeEvent> {
      fixture.detectChanges();
      let event:ResizeEvent;
      cm.resizeTest.subscribe((e:ResizeEvent)=> {
        event=e
      });
      el.dispatchEvent(new Event('mousedown'));
      fixture.detectChanges();
      let p = new Promise<ResizeEvent>((resolve,reject)=>{
        resolve(event);
        reject(()=>{
          throw 'kir';
        });
      });
      return p;
    };

    it('should set axis to X based on different Vertical string representations',()=>{
      cm.axis='H';
      eventP.then((e)=>{
        expect(e.direction).toBe(Axis.X);
      })


    });
  });

});
