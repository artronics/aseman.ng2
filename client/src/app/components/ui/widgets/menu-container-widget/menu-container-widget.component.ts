import { Component, OnInit, Input } from "@angular/core";
import { MenuItemWidgetComponent } from "../menu-item-widget/menu-item-widget.component";
import { BaseMenuItem } from "../../../../shared/menu/BaseMenuItem";

@Component({
  moduleId: module.id,
  selector: 'asm-menu-container-widget',
  templateUrl: 'menu-container-widget.component.html',
  styleUrls: ['menu-container-widget.component.css'],
  directives:[MenuItemWidgetComponent]
})
export class MenuContainerWidgetComponent implements OnInit {
  private _menuItems:BaseMenuItem[]=[];

  @Input()
  set menuItems(items:BaseMenuItem[]) {
    this._menuItems = items;
  }

  constructor() {}

  ngOnInit() {
  }

  get menuItems():BaseMenuItem[] {
    return this._menuItems;
  }
}
