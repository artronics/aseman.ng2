export class ExpandCollapseEvent {

  constructor(private _expandOrCollapse:boolean,
              private _indentLevel:number) {}

  get expandOrCollapse():boolean {
    return this._expandOrCollapse;
  }

  get indentLevel():number {
    return this._indentLevel;
  }

  set indentLevel(value:number) {
    this._indentLevel = value;
  }
}
