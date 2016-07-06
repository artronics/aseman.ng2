export enum FileType{
  FILE,
  DIR,
}

export class File{
  private _path:string;
  private _fileType:FileType;
  private _name:string;

  constructor(path:string, name:string, fileType:FileType) {
    this._path = path;
    this._fileType = fileType;
    this._name=name;
  }

  get path():string {
    return this._path;
  }

  get fileType():FileType {
    return this._fileType;
  }

  get name():string {
    return this._name;
  }
}
