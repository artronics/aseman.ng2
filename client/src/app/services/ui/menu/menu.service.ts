import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Menu } from "../../../components/ui/menu/Menu";

@Injectable()
export class MenuService {
  private _menuSource = new BehaviorSubject<Menu>(new Menu());
  menuList$ = this._menuSource.asObservable();

  changeMenu(menu:Menu){
    this._menuSource.next(menu);
  }

  constructor() {}

}
