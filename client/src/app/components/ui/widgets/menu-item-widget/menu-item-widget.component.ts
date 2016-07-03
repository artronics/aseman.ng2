import { Component, OnInit, Input } from "@angular/core";
import { BaseMenuItem } from "../../../../shared/menu/BaseMenuItem";

@Component({
  moduleId: module.id,
  selector: 'asm-menu-item-widget',
  templateUrl: 'menu-item-widget.component.html',
  styleUrls: ['menu-item-widget.component.css']
})
export class MenuItemWidgetComponent implements OnInit {
  private _menuItem:BaseMenuItem;
  private _displayName:string;

  @Input()
  set menuItem(value:BaseMenuItem) {
    this._menuItem = value;
    this._displayName=value.displayName;
  }

  constructor() {}

  ngOnInit() {
  }

  get displayName():string {
    return this._displayName;
  }
}
