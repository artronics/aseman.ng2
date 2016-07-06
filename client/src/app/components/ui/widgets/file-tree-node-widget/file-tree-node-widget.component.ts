import { Component, OnInit, Input } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'asm-file-tree-node-widget',
  template: `
<span class="asm_widget asm" [ngStyle]="{'padding-left':padding}">
  <i (click)="toggleExpand($event)" [ngClass]="expandableIcon"></i>
  <span><i [ngClass]="nodeIcon"></i>
  nodeItem</span><span>{{indentLevel}}</span>
</span>`,
  styleUrls: ['file-tree-node-widget.component.css'],
  directives: [NgClass, NgStyle]
})
export class FileTreeNodeWidgetComponent implements OnInit {
  @Input()
  indentLevel:number;

  private _expandableIcon:string;
  private _nodeIcon:string;

  constructor() {}

  ngOnInit() {
  }

  toggleExpand(event){

  }

  get nodeIcon():string {
    return this._nodeIcon;
  }

  get expandableIcon():string {
    return this._expandableIcon;
  }
}
