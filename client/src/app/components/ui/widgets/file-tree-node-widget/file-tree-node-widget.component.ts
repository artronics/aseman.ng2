import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";
import { File, FileType } from "../../../../shared/models/File";

@Component({
  moduleId: module.id,
  selector: 'asm-file-tree-node-widget',
  template: `
<span class="asm_widget asm" [ngStyle]="{'padding-left':getPadding()}">
  <i (click)="toggleExpand($event)" [ngClass]="expandableIcon"></i>
  <span><i [ngClass]="nodeIcon"></i>
  {{fileNode.file.name}}</span><span>{{indentLevel}}</span>
</span>`,
  styleUrls: ['file-tree-node-widget.component.css'],
  directives: [NgClass, NgStyle]
})
export class FileTreeNodeWidgetComponent implements OnInit {
  @Input()
  fileNode:FileNode;
  @Output()
  expanded:EventEmitter<any>=new EventEmitter();
  @Output()
  collapsed:EventEmitter<any>=new EventEmitter();

  private _isExpandable:boolean=false;
  private _isExpanded:boolean=false;
  private _expandableIcon:string;
  private _nodeIcon:string;

  constructor() {}

  ngOnInit() {
    switch (this.fileNode.file.fileType){
      case FileType.FILE:
        this._isExpandable=false;
        this._nodeIcon='fa fa-fw fa-file-o';
        break;
      case FileType.DIR:
        this._isExpandable=true;
        this._nodeIcon='fa fa-fw fa-folder';
        break;
    }
  }

  toggleExpand(event){
    this._isExpanded=!this._isExpanded;
    this._isExpanded?this.expanded.emit(null):this.collapsed.emit(null);
  }

  get nodeIcon():string {
    return this._nodeIcon;
  }

  get expandableIcon():string {
    let icon:string='fa fa-fw ';
    if(this._isExpandable){
      icon+=this._isExpanded?'fa-caret-down':'fa-caret-right';
    }
    return icon;
  }

  getPadding(){
    return String(this.fileNode.indentLevel)+'em';
  }

}
export class FileNode{
  private _file:File;
  private _indentLevel:number;

  constructor(file:File, indentLevel:number) {
    this._file = file;
    this._indentLevel = indentLevel;
  }

  get file():File {
    return this._file;
  }

  get indentLevel():number {
    return this._indentLevel;
  }
}
