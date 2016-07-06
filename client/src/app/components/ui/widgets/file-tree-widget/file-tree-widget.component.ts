import { Component, OnInit } from "@angular/core";
import { FileService } from "../../../../services/FileService";
import { File } from "../../../../shared/models/File";
import { FileTreeNodeWidgetComponent, FileNode } from "../file-tree-node-widget/file-tree-node-widget.component";

@Component({
  moduleId: module.id,
  selector: 'asm-file-tree-widget',
  template:`
<ul>
  <li *ngFor="let node of fileNodes; let inx=index" [class.tree-item-selected]="isSelected(inx)"
      (click)="onSelected(inx)">
    <asm-file-tree-node-widget [fileNode]="node" [indentLevel]="indentLevel(inx)"
                       [isSelected]="isSelected(inx)"
                       (expanded)="onExpansion($event,inx)" (collapsed)="onCollapse(inx)">
    </asm-file-tree-node-widget>
  </li>
</ul>
`,
  styleUrls: ['file-tree-widget.component.css'],
  providers:[FileService],
  directives:[FileTreeNodeWidgetComponent]
})
export class FileTreeWidgetComponent implements OnInit {
  private _fileService:FileService;
  private _fileNodes:FileNode[]=[];
  private _projectPath:string='/an/absolute/path/to/project-name';

  constructor(fileService:FileService) {
    this._fileService=fileService;
  }

  ngOnInit() {
    let files:File[]=this._fileService.getFiles(this._projectPath);
    for(let f of files){
      this._fileNodes.push(new FileNode(f,0));
    }
  }

  indentLevel(inx:number){

  }
  onExpansion(event,inx:number){
    let file:File=this._fileNodes[inx].file;
    let newIndentLevel:number=this._fileNodes[inx].indentLevel+1;
    let files:File[]=this._fileService.getFiles(this._projectPath+'/src');
    for(let f of files){
      this._fileNodes.splice(++inx,0,new FileNode(f,newIndentLevel));
    }
  }
  onCollapse(inx:number){
    console.log('col');
  }

  onSelected(inx:number){

  }

  isSelected(inx:number){

  }

  get fileNodes():FileNode[] {
    return this._fileNodes;
  }
}
