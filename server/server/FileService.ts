import fs=require('fs');

export class FileService{
  constructor(){
    fs.readdir('/',(er,files:string[])=>{
      for(let file of files){
        fs.stat('/'+file,(er,stats)=>{
          console.log(`file:${stats.size} dir: ${stats.isDirectory()}`);
        })
      }
    })
  }
}
