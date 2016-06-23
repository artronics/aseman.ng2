import { Component, OnInit } from "@angular/core";
import { TreeNodeWidgetComponent} from "../../widgets/tree-node-file-widget.component";
import { FileService, FileType, File } from "../../../../services/file/file.service";
import { TreeNodeWidget } from "../../widgets/TreeNodeWidget";
import { ExpandCollapseEvent } from "../../widgets/ExpandCollapseEvent";

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

  onExpanded(expOrColEvent:ExpandCollapseEvent,inx:number){
    /* expand */
    let childerFiles:File[] =this._fileService.getFiles(this._projectRoot+'/'+'src');
    if(expOrColEvent.expandOrCollapse){
      let childerenNodes:TreeNodeWidget[]=this.treeNodesFactory(childerFiles);
      for(let node of childerenNodes){
        node.indentLevel=++expOrColEvent.indentLevel;
        this._treeNodes.splice(++inx,0,node);
      }
    }
    /* expand */
    else {
      let length:number=childerFiles.length;
      this._treeNodes.splice(++inx,length);
    }

    // this._treeNodes.splice(++inx,0,childerenNodes);
  }

  get treeNodes():TreeNodeWidget[] {
    return this._treeNodes;
  }
}
