import { Component, OnInit, Inject } from "@angular/core";
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
  public isActive:boolean=false;

  private _menubarService:MenubarService;

  private _selectedItemIndex:number=-1;

  constructor(@Inject(MenubarService) menubarService:MenubarService) {
    this._menubarService=menubarService;
  }

  ngOnInit() {
    this.menubarTitles=this._menubarService.getTitles();
  }

  onClick(inx:number){
    this.isActive=!this.isActive;
    if (this.isActive){
      this._selectedItemIndex=inx;
    }
    else {
      this._selectedItemIndex=-1;
    }
  }

  get selectedItemIndex():number {
    return this._selectedItemIndex;
  }
}
