import { Component, OnInit, Inject, Input } from "@angular/core";
import { MenubarService } from "../../services/menu/menubar.service";
import { MenubarItemFactory } from "../ide/MenubarItemFactory";
import { NgClass } from "@angular/common";
import { MenuContainerWidgetComponent } from "../ui/widgets/menu-container-widget/menu-container-widget.component";
import { MenuList } from "../../shared/menu/MenuList";

@Component({
  moduleId: module.id,
  selector: 'asm-menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
  providers:[MenubarService,MenubarItemFactory],
  directives:[NgClass,MenuContainerWidgetComponent]
})
export class MenubarComponent implements OnInit {
  public menubarTitles:string[]=[];
  private _isActive:boolean=false;

  private _layoutClick:boolean;

  /**
   * Each time we receive a layout click it means we should cancel menu display.
   * The parameter has no use. It is there so parent component can change it so angular
   * trigger its change detection cycle.
   * @param value
   */
  @Input()
  set layoutClick(value:boolean) {
    this.cancelDisplay();
  }

  private _menubarService:MenubarService;

  private _selectedItemIndex:number=-1;

  constructor(@Inject(MenubarService) menubarService:MenubarService) {
    this._menubarService=menubarService;
  }

  private cancelDisplay(){
    this._isActive=false;
    this._selectedItemIndex=-1;
  }

  ngOnInit() {
    this.menubarTitles=this._menubarService.getTitles();
  }

  onClick(inx:number,$event){
    $event.stopPropagation();
    this._isActive=!this._isActive;

    this._selectedItemIndex= this._isActive ? inx:-1;
  }

  onMouseenter(inx:number){
    if (this._isActive){
      this._selectedItemIndex=inx;
    }
  }

  isSelected(inx:number):boolean{
    return (this._selectedItemIndex===inx)
  }

  getMenuList(inx:number):MenuList{
    let title:string=this.menubarTitles[inx];

    return this._menubarService.getMenuListByTitle(title);
  }

  get selectedItemIndex():number {
    return this._selectedItemIndex;
  }

  get isActive():boolean {
    return this._isActive;
  }

}
