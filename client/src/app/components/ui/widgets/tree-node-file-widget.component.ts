import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";
import { FileType } from "../../../services/file/file.service";
import { TreeNodeWidget } from "./TreeNodeWidget";
import { ExpandCollapseEvent } from "./ExpandCollapseEvent";
@Component({
  moduleId: module.id,
  selector: 'asm-tree-node-wgt',

  template: `
<span class="asm_widget asm" [ngStyle]="{'padding-left':padding}">
  <i (click)="toggleExpand()" [ngClass]="expandableIcon"></i>
  <span><i style="color:#bd9662" [ngClass]="nodeIcon"></i>
  {{node.displayName}}</span><span>{{node.indentLevel}}</span>
</span>`,

  directives: [NgClass, NgStyle]
})
export class TreeNodeWidgetComponent implements OnInit {
  @Input() node:TreeNodeWidget;

  @Output() onExpanded:EventEmitter<any>;

  private _isExpanded:boolean = false;

  constructor() {
    this.onExpanded = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleExpand() {
    this._isExpanded = !this._isExpanded;
    let event:ExpandCollapseEvent = new ExpandCollapseEvent(this._isExpanded, this.node.indentLevel);

    this.onExpanded.emit(event);
  }

  get padding():string {

    return this.node.indentLevel + 'em';
  }

  get expandableIcon():string {
    if (this.node.isExpandable) {
      if (this._isExpanded) {

        return 'fa fa-fw fa-caret-down'
      }

      return 'fa fa-fw fa-caret-right'
    }
    return 'fa fa-fw';
  }

  get nodeIcon():string {
    //   if (this.node.fileType==FileType.DIR){
    //
    //     return 'fa fa-fw fa-folder-o';
    //   }
    //
    return 'fa fa-fw fa-file-o';
  }
}

