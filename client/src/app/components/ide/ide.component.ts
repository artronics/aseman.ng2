import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { MenubarService } from "../../services/menu/menubar.service";
import { MenubarItemFactory } from "./MenubarItemFactory";

@Component({
  moduleId: module.id,
  selector: 'asm-ide',
  template: `
<asm-layout></asm-layout>
  `,
  directives:[LayoutComponent],
  providers:[MenubarService]
})
export class IdeComponent implements OnInit {

  constructor(private _menubarService:MenubarService) {
  }

  ngOnInit() {
    let menubarFactory:MenubarItemFactory=new MenubarItemFactory();
    menubarFactory.createMenubar();
    this._menubarService.menuLists=menubarFactory.menubarMenuLists;
  }

}
