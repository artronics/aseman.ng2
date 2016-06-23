import { Component, OnInit } from "@angular/core";
import { TreeNodeWidgetComponent, TreeNodeWidget } from "../../widgets/tree-node-widget.component";
import { FileService, FileType, File } from "../../../../services/file/file.service";

@Component({
  moduleId: module.id,
  selector: 'asm-navigator-view',
  templateUrl: 'navigator-view.component.html',
  styleUrls: ['navigator-view.component.css'],
  directives:[TreeNodeWidgetComponent],
  providers:[FileService]
})
export class NavigatorViewComponent implements OnInit {
  private _treeNodes:TreeNodeWidget[]=[];
  //TODO should be provided by project service
  private _projectRoot:string='/an/absolute/path/to/project-name';

  constructor(private _fileService:FileService) {}

  ngOnInit() {
    let files:File[] = this._fileService.getFiles(this._projectRoot);
    this._treeNodes=this.treeNodesFactory(files);

    console.log(this._treeNodes);
  }
  private treeNodesFactory(files:File[]):TreeNodeWidget[]{
    let w:TreeNodeWidget[]=[];
    for(let file of files){
      let isExp:boolean = file.fileType==FileType.FILE? false:true ;
      /* Expandable must be set in navigator because it knows about child existence*/
      /* But we also pass FileType so widget can create proper icon based on this*/
      w.push(new TreeNodeWidget(file.name,isExp,file.fileType));
    }

    return w;
  }

  onExpanded(parentIndentLevel:number,inx:number){
    console.log(`p indent: ${parentIndentLevel}` +inx);

    let childerFiles:File[] =this._fileService.getFiles(this._projectRoot+'/'+'src');
    console.log(childerFiles);
    let childerenNodes:TreeNodeWidget[]=this.treeNodesFactory(childerFiles);
    for(let node of childerenNodes){
      node.indentLevel=++parentIndentLevel;
      this._treeNodes.splice(++inx,0,node);
    }
    // this._treeNodes.splice(++inx,0,childerenNodes);
  }

  get treeNodes():TreeNodeWidget[] {
    return this._treeNodes;
  }
}
