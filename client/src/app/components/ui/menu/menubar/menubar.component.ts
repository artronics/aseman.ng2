import { Component, OnInit } from "@angular/core";
import { NgClass } from "@angular/common";
import { ClickBroadcasterService } from "../../../../services/ui/events/click-broadcaster.service";
import { MenuContainerComponent } from "../menu-container/menu-container.component";

@Component({
  moduleId: module.id,
  selector: 'asm-menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
  directives: [NgClass,MenuContainerComponent]
})
export class MenubarComponent implements OnInit {
  private _titles:string[] = [];
  private _isActive:boolean = false;
  private _selectedTitle:number = -1;

  constructor(private _clickBroadcaster:ClickBroadcasterService) {
  }

  ngOnInit() {
    this._clickBroadcaster.singleLeftClick$.subscribe(()=>this.cancelDisplay());
    this._titles.push('File');
    this._titles.push('Edit');
  }

  onClick(idx:number, event:MouseEvent):boolean {
    event.stopPropagation();
    this._isActive = !this._isActive;
    if (!this._isActive) {
      this._selectedTitle = -1;
    } else {
      this._selectedTitle=idx;
    }
    //I return false to stop event from prapagating but it
    //does not work. so i stop it using $event
    return false;
  }
  private cancelDisplay(){
    if (this._isActive){
      this._isActive=false;
      this._selectedTitle=-1;
    }
  }

  onMouseenter(idx:number){
    if (this._isActive){
      this._selectedTitle=idx;
    }

  }

  get isActive():boolean {
    return this._isActive;
  }

  get selectedTitle():number {
    return this._selectedTitle;
  }

  get titles():string[] {
    return this._titles;
  }
}

