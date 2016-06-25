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
  private _selectedIndex:number;
  private _selectedList:number[];
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
    }
  }

  onSelected(inx:number) {
    if (this._isMultipleSelectionOn) {

    }
    else {
      this._selectedIndex = inx;
    }
  }

  isSelected(inx) {
    if (this._isMultipleSelectionOn) {

    }
    else {
      this._selectedIndex = inx;
    }
    // if (this._treeNodes[inx].isSelected){
    //   return true;
    // }

    return false;
  }

  get treeNodes():TreeNodeWidget[] {
    return this._treeNodes;
  }
}
