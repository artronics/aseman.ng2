import { beforeEach, beforeEachProviders, describe, expect, it, inject } from "@angular/core/testing";
import { ComponentFixture, TestComponentBuilder } from "@angular/compiler/testing";
import { Component, provide, OnInit } from "@angular/core";
import { By } from "@angular/platform-browser";
import { TreeNodeWidgetComponent } from "./tree-node-file-widget.component";
import { TreeNodeWidget } from "./TreeNodeWidget";
import { File, FileType } from "../../../shared/models/File";

describe('Component TreeNodeFileWidgetComponent', ()=> {
  let builder:TestComponentBuilder,
    cm:TreeNodeWidgetComponent;


  beforeEachProviders(()=>[TreeNodeWidgetComponent]);

  beforeEach(inject([TestComponentBuilder], function (tcb:TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component',
    inject([TreeNodeWidgetComponent], (component:TreeNodeWidgetComponent)=> {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TreeNodeWidgetTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TreeNodeWidgetComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  describe('TreeNodeWidgetComponet class test', ()=> {
    let fixture:ComponentFixture<any>;
    let ele:any;
    let cm:any;
    beforeEach(inject([],()=>{
      return builder.createAsync(TreeNodeWidgetTestController)
        .then((_fixture: ComponentFixture<any>) => {
          fixture=_fixture;
          ele=fixture.nativeElement;
        });
    }));

    it('should',()=>{
      fixture.detectChanges();
      let file=fixture.nativeElement.querySelector('.asm');
      console.log(file);
      expect(file).toBe(1);

    });

  });

});

@Component({
  selector: 'test',
  template: `<ul>
<li id="file"><asm-tree-node-wdg [node]="fileNode"></asm-tree-node-wdg></li>
<li id="dir"><asm-tree-node-wdg [node]="dirNode"></asm-tree-node-wdg></li>
</ul>`,
  directives: [TreeNodeWidgetComponent]
})
class TreeNodeWidgetTestController implements OnInit{
  public fileNode:TreeNodeWidget;
  public dirNode:TreeNodeWidget;

  private _file:File;
  private _dir:File;
  constructor(){
    this._file=new File('foo/bar.c','bar.c',FileType.FILE);
    this._dir=new File('foo/','foo',FileType.DIR);
  }

  ngOnInit():any {
    this.fileNode=new TreeNodeWidget(this._file,0);
    this.dirNode=new TreeNodeWidget(this._file,0);
  }
}
