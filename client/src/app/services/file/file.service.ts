import { Injectable } from "@angular/core";

@Injectable()
export class FileService {

  constructor() {}

  getFiles(path:string):File[]{
    let files:File[]=[];
    if (path=='/an/absolute/path/to/project-name'){
      let f1:File=new File('src','src',FileType.DIR);
      let f4:File=new File('foo.h','foo.h',FileType.FILE);
      let f5:File=new File('bar.h','bar',FileType.FILE);
      let f6:File=new File('css','css',FileType.DIR);
      files.push(f1,f4,f5,f6);
    }
    if (path=='/an/absolute/path/to/project-name/src') {
      let f2:File=new File('src/app','app',FileType.DIR);
      let f3:File=new File('src/app/foo.c','foo.c',FileType.FILE);
      files.push(f2,f3);
    }

    return files;
  }

}
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
