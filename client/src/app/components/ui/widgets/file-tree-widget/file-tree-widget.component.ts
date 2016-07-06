import { Component, OnInit } from "@angular/core";
import { FileService } from "../../../../services/FileService";
import { File } from "../../../../shared/models/File";
import { FileTreeNodeWidgetComponent } from "../file-tree-node-widget/file-tree-node-widget.component";

@Component({
  moduleId: module.id,
  selector: 'asm-file-tree-widget',
  template:`
<ul>
  <li *ngFor="let file of files; let inx=index" [class.tree-item-selected]="isSelected(inx)"
      (click)="onSelected(inx)">{{file.name}}
    <asm-file-tree-node-widget [node]="node" [indentLevel]="indentLevel(inx)"
                       [isSelected]="isSelected(inx)"
                       (onExpanded)="onExpansion($event,inx)">
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
  private _files:File[]=[];
  private _projectPath:string='/an/absolute/path/to/project-name';

  constructor(fileService:FileService) {
    this._fileService=fileService;
  }

  ngOnInit() {
    this._files=this._fileService.getFiles(this._projectPath);
  }

  indentLevel(inx:number){

  }
  onExpansion(event,inx:number){

  }

  onSelected(inx:number){

  }

  isSelected(inx:number){
    
  }

  get files():File[] {
    return this._files;
  }
}
