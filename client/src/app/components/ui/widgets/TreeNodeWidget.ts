
export class TreeNodeWidget{

  constructor(private _displayName:string,
              private _isExpandable:boolean=false,
              private _indentLevel:number=0) {
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

}
