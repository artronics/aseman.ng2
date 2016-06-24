import { File, FileType } from "../../../shared/models/File";
export class TreeNodeWidget {

  private _displayName:string;
  private _isExpandable:boolean = false;
  private _numOfChildren:number = 0;
  private _isSelected:boolean=false;

  constructor(private _file:File,private _indentLevel:number=0) {
    switch (_file.fileType){
      case FileType.FILE:
        this._isExpandable=false;
        break;
      default:
        this._isExpandable= true;
    }

    this._displayName=_file.name;
  }

  get file():File {
    return this._file;
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

  get numOfChildren():number {
    return this._numOfChildren;
  }

  set numOfChildren(value:number) {
    this._numOfChildren = value;
  }

  get isSelected():boolean {
    return this._isSelected;
  }

  set isSelected(value:boolean) {
    this._isSelected = value;
  }
}
