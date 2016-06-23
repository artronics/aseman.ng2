import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../MenuItem";

@Component({
  moduleId: module.id,
  selector: 'asm-menu-container',
  templateUrl: 'menu-container.component.html',
  styleUrls: ['menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {
  private _menuItems:MenuItem[]=[];

  constructor() {}

  ngOnInit() {
    this._menuItems.push(new MenuItem({name:'foo'}));
    this._menuItems.push(new MenuItem({name:'bar'}));
  }

  get menuItems():MenuItem[] {
    return this._menuItems;
  }
}
