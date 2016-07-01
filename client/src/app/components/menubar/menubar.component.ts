import { Component, OnInit, Input } from '@angular/core';
import { MenubarService } from "../../services/menu/menubar.service";
import { MenubarItemFactory } from "../ide/MenubarItemFactory";

@Component({
  moduleId: module.id,
  selector: 'asm-menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
  providers:[MenubarService,MenubarItemFactory]
})
export class MenubarComponent implements OnInit {
  public menubarTitles:string[]=[];

  constructor(private _menubarService:MenubarService) {}

  ngOnInit() {
    this.menubarTitles=this._menubarService.getTitles();
  }

}
