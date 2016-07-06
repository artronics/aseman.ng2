import { Injectable } from "@angular/core";
import { FileType, File } from "../shared/models/File";

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
      let f3:File=new File('src/foo.c','foo.c',FileType.FILE);
      files.push(f2,f3);
    }

    return files;
  }

}
