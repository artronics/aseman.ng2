import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";
import { TreeNodeWidget } from "./TreeNodeWidget";
import { ExpandCollapseEvent } from "./ExpandCollapseEvent";
import { FileType } from "../../../shared/models/File";
@Component({
  moduleId: module.id,
  selector: 'asm-tree-node-wgt',

  template: `
<span class="asm_widget asm" [ngStyle]="{'padding-left':padding}">
  <i (click)="toggleExpand($event)" [ngClass]="expandableIcon"></i>
  <span><i [ngClass]="nodeIcon"></i>
  {{node.displayName}}</span><span>{{node.indentLevel}}</span>
</span>`,

  directives: [NgClass, NgStyle]
})
export class TreeNodeWidgetComponent implements OnInit {
  @Input() node:TreeNodeWidget;
  @Input()
  set isSelected(value:boolean){
    this.node.isSelected=value;
  }

  @Output() onExpanded:EventEmitter<any>;

  private _isExpanded:boolean = false;
  private _isSelected:boolean = false;

  constructor() {
    this.onExpanded = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleExpand($event) {
    $event.stopPropagation();
    this._isExpanded = !this._isExpanded;
    let event:ExpandCollapseEvent = new ExpandCollapseEvent(this._isExpanded, this.node);

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
    if (this.node.file.fileType == FileType.DIR) {

      return 'fa fa-fw fa-folder-o directory-icon';
    }

    return 'fa fa-fw fa-file-o';
  }
}

