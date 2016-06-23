import { Menubar } from "../ui/menu/Menubar";
import { Menu } from "../ui/menu/Menu";
import { MenuItem } from "../ui/menu/MenuItem";


export class IdeMenubar {
  constructor(){

  }
  creat():Menubar {
    let menubar = new Menubar();
    menubar.add({title:'File',menu:this.file()});
    menubar.add({title:'Edit',menu:this.edit()});

    return menubar;
  }

  private file():Menu {
    let file = new Menu;
    file.addItem(new MenuItem({name:'new'}));
    file.addItem(new MenuItem({name:'open'}));
    file.addItem(new MenuItem({name:'save'}));

    return file;
  }
  private edit():Menu {
    let edit = new Menu;
    edit.addItem(new MenuItem({name:'copy'}));

    return edit;
  }
}
