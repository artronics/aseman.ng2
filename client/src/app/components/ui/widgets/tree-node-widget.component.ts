import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";
import { FileType } from "../../../services/file/file.service";
@Component({
  moduleId:module.id,
  selector:'asm-tree-node-wgt',
  template:`
<span class="asm_widget asm" [ngStyle]="{'padding-left':padding}">
  <i (click)="toggleExpand()" [ngClass]="expandableIcon"></i>
  <span><i style="color:#bd9662" [ngClass]="nodeIcon"></i>
  {{node.displayName}}</span><span>{{node.indentLevel}}</span>
</span>`,
  directives:[NgClass,NgStyle]
})
export class TreeNodeWidgetComponent implements OnInit{
  @Input() node:TreeNodeWidget;

  @Output() onExpanded:EventEmitter<any>;

  private _isExpanded:boolean=false;

  constructor() {
    this.onExpanded = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleExpand(){
    this._isExpanded=!this._isExpanded;
    if (this._isExpanded){
      this.onExpanded.emit(this.node.indentLevel);
    }
  }

  get padding():string{

    return this.node.indentLevel+'em';
  }

  get expandableIcon():string {
    if (this.node.isExpandable){
      if (this._isExpanded){

        return 'fa fa-fw fa-caret-down'
      }

      return 'fa fa-fw fa-caret-right'
    }
    return 'fa fa-fw';
  }

  get nodeIcon():string{
    if (this.node.fileType==FileType.DIR){

      return 'fa fa-fw fa-folder-o';
    }

    return 'fa fa-fw fa-file-o';
  }
}

export class TreeNodeWidget{
  private _displayName:string;
  private _isExpandable:boolean=false;
  private _fileType:FileType;
  private _indentLevel:number=0;

  constructor(displayName:string,isExpandable?:boolean,fileType?:FileType) {
    this._displayName = displayName;
    this._isExpandable=isExpandable;
    this._fileType= fileType;
  }

  get displayName():string {
    return this._displayName;
  }

  set displayName(value:string) {
    this._displayName = value;
  }

  get isExpandable():boolean {
    return this._isExpandable;
  }

  set isExpandable(value:boolean) {
    this._isExpandable = value;
  }

  get indentLevel():number {
    return this._indentLevel;
  }

  set indentLevel(value:number) {
    this._indentLevel = value;
  }

  get fileType():FileType {
    return this._fileType;
  }

  set fileType(value:FileType) {
    this._fileType = value;
  }
}
