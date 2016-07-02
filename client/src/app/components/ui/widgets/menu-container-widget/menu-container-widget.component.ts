import { Component, OnInit, Input } from "@angular/core";
import { MenuItemWidgetComponent } from "../menu-item-widget/menu-item-widget.component";
import { BaseMenuItem } from "../../../../shared/menu/BaseMenuItem";
import { MenuList } from "../../../../shared/menu/MenuList";

@Component({
  moduleId: module.id,
  selector: 'asm-menu-container-widget',
  templateUrl: 'menu-container-widget.component.html',
  styleUrls: ['menu-container-widget.component.css'],
  directives:[MenuItemWidgetComponent]
})
export class MenuContainerWidgetComponent implements OnInit {
  private _menuList:MenuList;
  private _menuItems:BaseMenuItem[]=[];

  @Input()
  set menuList(list:MenuList) {
    this._menuList = list;
  }

  constructor() {}

  ngOnInit() {
    this._menuItems=this._menuList.menuItems;
  }

  get menuItems():BaseMenuItem[] {
    return this._menuItems;
  }
}
