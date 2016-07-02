import { Component, OnInit, Inject } from "@angular/core";
import { MenubarService } from "../../services/menu/menubar.service";
import { MenubarItemFactory } from "../ide/MenubarItemFactory";
import { NgClass } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'asm-menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
  providers:[MenubarService,MenubarItemFactory],
  directives:[NgClass]
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

    this._selectedItemIndex= this.isActive ? inx:-1;
  }

  onMouseenter(inx:number){
    if (this.isActive){
      this._selectedItemIndex=inx;
    }
  }
  
  isSelected(inx:number):boolean{
    return (this._selectedItemIndex===inx)
  }

  get selectedItemIndex():number {
    return this._selectedItemIndex;
  }
}
