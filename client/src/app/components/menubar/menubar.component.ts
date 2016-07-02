import { Component, OnInit, Input, Inject } from '@angular/core';
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
  private _menubarService:MenubarService;

  constructor(@Inject(MenubarService) menubarService:MenubarService) {
    this._menubarService=menubarService;
  }

  ngOnInit() {
    this.menubarTitles=this._menubarService.getTitles();
  }

}
