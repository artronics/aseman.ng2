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

  private _selectedItemIndex:number=-1;

  @Input()
  set menuList(list:MenuList) {
    this._menuList = list;
  }

  constructor() {}

  ngOnInit() {
    this._menuItems=this._menuList.menuItems;
  }

  onClick(inx:number){
  }

  onMouseenter(inx:number){
    this._selectedItemIndex=inx;
  }
  onMouseleave(){
    this._selectedItemIndex=-1;
  }

  isSelected(inx:number):boolean{
    return (this._selectedItemIndex===inx);
  }

  get menuItems():BaseMenuItem[] {
    return this._menuItems;
  }

  get selectedItemIndex():number {
    return this._selectedItemIndex;
  }
}
