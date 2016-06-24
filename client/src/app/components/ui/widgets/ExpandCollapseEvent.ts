import { TreeNodeWidget } from "./TreeNodeWidget";
export class ExpandCollapseEvent {

  constructor(private _expandOrCollapse:boolean,
              private _treeNodeWidget:TreeNodeWidget) {}

  get expandOrCollapse():boolean {
    return this._expandOrCollapse;
  }

  get treeNodeWidget():TreeNodeWidget {
    return this._treeNodeWidget;
  }

  set treeNodeWidget(value:TreeNodeWidget) {
    this._treeNodeWidget = value;
  }
}
