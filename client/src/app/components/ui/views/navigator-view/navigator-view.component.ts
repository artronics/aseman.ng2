import { Component, OnInit } from "@angular/core";
import { TreeNodeWidgetComponent } from "../../widgets/tree-node-file-widget.component";
import { FileService } from "../../../../services/file/file.service";
import { TreeNodeWidget } from "../../widgets/TreeNodeWidget";
import { ExpandCollapseEvent } from "../../widgets/ExpandCollapseEvent";
import { File } from "../../../../shared/models/File";

@Component({
  moduleId: module.id,
  selector: 'asm-navigator-view',
  templateUrl: 'navigator-view.component.html',
  styleUrls: ['navigator-view.component.css'],
  directives: [TreeNodeWidgetComponent],
  providers: [FileService]
})
export class NavigatorViewComponent implements OnInit {
  private _treeNodes:TreeNodeWidget[] = [];
  private _selectedList:TreeNodeWidget[]=[];
  private _isMultipleSelectionOn:boolean = false;
  //TODO should be provided by project service
  private _projectRoot:string = '/an/absolute/path/to/project-name';

  constructor(private _fileService:FileService) {
  }

  ngOnInit() {
    let files:File[] = this._fileService.getFiles(this._projectRoot);
    for (let file of files) {
      let node:TreeNodeWidget = new TreeNodeWidget(file);
      node.numOfChildren = 0;
      this._treeNodes.push(node);
    }
  }

  onExpanded(expOrColEvent:ExpandCollapseEvent, inx:number) {
    let files:File[] = this._fileService.getFiles(this._projectRoot + '/' + 'src');

    /* expand */
    if (expOrColEvent.expandOrCollapse) {
      let indentLevel = expOrColEvent.treeNodeWidget.indentLevel + 1;
      for (let file of files) {
        let node = new TreeNodeWidget(file, indentLevel);
        this._treeNodes.splice(++inx, 0, node);
      }
      expOrColEvent.treeNodeWidget.numOfChildren = files.length;
    }
    /* collapse */
    else {
      let i:number = expOrColEvent.treeNodeWidget.numOfChildren;
      let counter:number = 0;
      while (i != 0) {
        counter++;
        i--;
        i += this._treeNodes[inx + counter].numOfChildren;
      }

      this._treeNodes.splice(++inx, counter);
      
      //TODO clear isSelected if it is in collapsed list
      // console.log(this._selectedList[0]);
    }
  }

  onSelected(inx:number) {
    if (this._isMultipleSelectionOn) {

    }
    else {
      this._selectedList[0]=this._treeNodes[inx];
      this._treeNodes[inx].isSelected=true;
    }
    console.log(this._selectedList[0]);
  }

  isSelected(inx) {
    if (this._isMultipleSelectionOn) {

    }
    else {
      return (this._selectedList[0] === this._treeNodes[inx])
    }

    return false;
  }

  get treeNodes():TreeNodeWidget[] {
    return this._treeNodes;
  }
}
